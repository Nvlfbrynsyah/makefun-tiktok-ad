import * as fs from 'fs';
import * as path from 'path';

// Define directories with fallbacks
const BOT_DIR = process.env.MAKEFUN_BOT_DIR || '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || '/output';

function main() {
    try {
        const videoJsonPath = path.join(BOT_DIR, 'VIDEO.json');
        
        // Check if file exists and is not empty
        if (!fs.existsSync(videoJsonPath)) {
            console.error(`Error: VIDEO.json not found at ${videoJsonPath}`);
            process.exit(1);
        }
        
        if (fs.statSync(videoJsonPath).size === 0) {
            console.error('Error: VIDEO.json is empty');
            process.exit(1);
        }
        
        // Ensure output directory exists
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }
        
        const outputPath = path.join(OUTPUT_DIR, 'VIDEO.json');
        fs.copyFileSync(videoJsonPath, outputPath);
        
        console.log(`Successfully copied VIDEO.json to ${outputPath}`);
    } catch (error) {
        console.error('An unexpected error occurred:', error.message);
        process.exit(1);
    }
}

main();
