const fs = require('fs');
const path = require('path');
const readline = require('readline');

const INDEX_PATH = path.join(__dirname, 'index.json');
const EMBEDDINGS_PATH = path.join(__dirname, 'embeddings.json');

// Load index
const chunks = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'));
console.log(`Loaded ${chunks.length} chunks`);

// Simple keyword search
function keywordSearch(query, limit = 5) {
    const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    
    const scored = chunks.map(chunk => {
        const text = chunk.text.toLowerCase();
        let score = 0;
        for (const word of queryWords) {
            // Count occurrences
            const regex = new RegExp(`\\b${word}\\b`, 'g');
            const matches = text.match(regex);
            if (matches) score += matches.length;
        }
        return { chunk, score };
    }).filter(item => item.score > 0);
    
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, limit).map(item => item.chunk);
}

// Display results
function displayResults(chunks, query) {
    console.log(`\n=== Results for "${query}" ===`);
    chunks.forEach((chunk, i) => {
        console.log(`\n[${i + 1}] ${chunk.file} (lines ${chunk.line_start}-${chunk.line_end})`);
        console.log(`Language: ${chunk.language}`);
        console.log(`Text preview: ${chunk.text.substring(0, 200)}...`);
        console.log(`---`);
    });
}

// Interactive mode
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask() {
    rl.question('\nEnter search query (or "exit"): ', (query) => {
        if (query.toLowerCase() === 'exit') {
            rl.close();
            return;
        }
        
        const results = keywordSearch(query, 5);
        if (results.length === 0) {
            console.log('No results found.');
        } else {
            displayResults(results, query);
        }
        
        ask();
    });
}

// If argument provided, run once
if (process.argv.length > 2) {
    const query = process.argv.slice(2).join(' ');
    const results = keywordSearch(query, 5);
    if (results.length === 0) {
        console.log('No results found.');
    } else {
        displayResults(results, query);
    }
    process.exit(0);
} else {
    console.log('Interactive RAG query for Bobr project');
    console.log('Type "exit" to quit.\n');
    ask();
}