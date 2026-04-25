const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const INDEX_PATH = path.join(__dirname, 'index.json');
const EMBEDDINGS_PATH = path.join(__dirname, 'embeddings.json');

// Load index
const chunks = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'));
console.log(`Loaded ${chunks.length} chunks`);

// Configuration
const OLLAMA_HOST = process.env.OLLAMA_HOST || 'http://localhost:11434';
const EMBEDDING_MODEL = process.env.EMBEDDING_MODEL || 'nomic-embed-text';
const BATCH_SIZE = 10; // chunks per request
const CONCURRENCY = 1;

// Check if Ollama is reachable
function checkOllama() {
    return new Promise((resolve, reject) => {
        const url = new URL(OLLAMA_HOST);
        const client = url.protocol === 'https:' ? https : http;
        const req = client.get(`${OLLAMA_HOST}/api/tags`, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.models) {
                        console.log('Ollama is reachable. Available models:', json.models.map(m => m.name).join(', '));
                        resolve(true);
                    } else {
                        console.warn('Ollama responded but no models list.');
                        resolve(false);
                    }
                } catch (e) {
                    console.warn('Failed to parse Ollama response:', e.message);
                    resolve(false);
                }
            });
        });
        req.on('error', (err) => {
            console.warn(`Ollama not reachable at ${OLLAMA_HOST}:`, err.message);
            resolve(false);
        });
        req.setTimeout(5000, () => {
            req.destroy();
            console.warn('Ollama connection timeout.');
            resolve(false);
        });
    });
}

// Generate embedding for a single text
async function getEmbedding(text) {
    return new Promise((resolve, reject) => {
        const url = new URL(OLLAMA_HOST);
        const client = url.protocol === 'https:' ? https : http;
        
        const payload = JSON.stringify({
            model: EMBEDDING_MODEL,
            prompt: text
        });
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload)
            }
        };
        
        const req = client.request(`${OLLAMA_HOST}/api/embeddings`, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.embedding) {
                        resolve(json.embedding);
                    } else {
                        reject(new Error(`No embedding in response: ${data}`));
                    }
                } catch (e) {
                    reject(new Error(`Failed to parse response: ${e.message}`));
                }
            });
        });
        
        req.on('error', reject);
        req.write(payload);
        req.end();
    });
}

async function main() {
    const ollamaAvailable = await checkOllama();
    if (!ollamaAvailable) {
        console.error('Ollama is not available. Please install and run Ollama, or set OLLAMA_HOST.');
        console.error('Embeddings will not be generated.');
        process.exit(1);
    }
    
    // Load existing embeddings if any
    let existing = {};
    try {
        existing = JSON.parse(fs.readFileSync(EMBEDDINGS_PATH, 'utf8'));
        console.log(`Loaded ${Object.keys(existing).length} existing embeddings`);
    } catch (err) {
        // File doesn't exist or invalid, start fresh
    }
    
    const embeddings = {};
    let processed = 0;
    
    // Process chunks in batches
    for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
        const batch = chunks.slice(i, i + BATCH_SIZE);
        console.log(`Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(chunks.length / BATCH_SIZE)}...`);
        
        for (const chunk of batch) {
            if (existing[chunk.id]) {
                // Already have embedding
                embeddings[chunk.id] = existing[chunk.id];
                processed++;
                continue;
            }
            
            try {
                const embedding = await getEmbedding(chunk.text);
                embeddings[chunk.id] = {
                    vector: embedding,
                    file: chunk.file,
                    lines: `${chunk.line_start}-${chunk.line_end}`
                };
                processed++;
                console.log(`  Generated embedding for chunk ${chunk.id} (${chunk.file})`);
                // Small delay to avoid overwhelming
                await new Promise(resolve => setTimeout(resolve, 100));
            } catch (err) {
                console.error(`Failed to generate embedding for chunk ${chunk.id}:`, err.message);
                // Continue with next chunk
            }
        }
    }
    
    // Save embeddings
    fs.writeFileSync(EMBEDDINGS_PATH, JSON.stringify(embeddings, null, 2), 'utf8');
    console.log(`\nSaved ${Object.keys(embeddings).length} embeddings to ${EMBEDDINGS_PATH}`);
    console.log(`Processed ${processed} chunks total.`);
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});