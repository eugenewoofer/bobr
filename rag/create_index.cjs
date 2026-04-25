const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, '..');
const outputFile = path.join(__dirname, 'index.json');

// Get all text files (exclude binaries)
function getAllFiles(dir, excludePatterns) {
    const files = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            if (!excludePatterns.some(p => p.test(item.name))) {
                files.push(...getAllFiles(fullPath, excludePatterns));
            }
        } else {
            if (!excludePatterns.some(p => p.test(fullPath))) {
                files.push(fullPath);
            }
        }
    }
    return files;
}

const excludePatterns = [
    /node_modules/,
    /\.git/,
    /\.jpg$/,
    /\.svg$/,
    /\.log$/,
    /\.bat$/
];

const allFiles = getAllFiles(basePath, excludePatterns);

const chunks = [];
let chunkId = 0;

allFiles.forEach(file => {
    const relativePath = path.relative(basePath, file);
    const extension = path.extname(file).toLowerCase();
    
    // Determine language/file type
    const language = (() => {
        switch (extension) {
            case '.vue': return 'vue';
            case '.ts': return 'typescript';
            case '.js': return 'javascript';
            case '.json': return 'json';
            case '.md': return 'markdown';
            case '.css': return 'css';
            case '.html': return 'html';
            default: return 'text';
        }
    })();
    
    // Read file content
    let content;
    try {
        content = fs.readFileSync(file, 'utf8');
    } catch (err) {
        console.warn(`Failed to read ${relativePath}:`, err.message);
        return;
    }
    
    // Split into lines
    const lines = content.split(/\r?\n/);
    
    // Create chunks of 20 lines with 5 lines overlap
    const chunkSize = 20;
    const overlap = 5;
    const step = chunkSize - overlap;
    
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex += step) {
        const chunkLines = lines.slice(lineIndex, lineIndex + chunkSize);
        const chunkText = chunkLines.join('\n');
        
        // Only include non-empty chunks
        if (chunkText.trim().length > 0) {
            chunks.push({
                id: chunkId,
                file: relativePath.replace(/\\/g, '/'), // normalize to forward slashes
                language,
                line_start: lineIndex + 1,
                line_end: lineIndex + chunkLines.length,
                text: chunkText,
                token_count: Math.ceil(chunkText.length / 4) // rough estimate
            });
            chunkId++;
        }
    }
});

// Save to JSON
fs.writeFileSync(outputFile, JSON.stringify(chunks, null, 2), 'utf8');
console.log(`Created RAG index with ${chunks.length} chunks at ${outputFile}`);