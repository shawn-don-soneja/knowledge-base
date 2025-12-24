import fs from "node:fs";
import path from "node:path";

interface ParsedFile {
    name: string;
    path: string;
    content: string;
    extension: string;
}

export function parseObsidianFiles(obsidianFolderPath: string): ParsedFile[] {
    const resolvedPath = path.resolve(obsidianFolderPath);
    const files: ParsedFile[] = [];

    function walkDirectory(dir: string): void {
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        entries.forEach((entry) => {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                walkDirectory(fullPath);
            } else if (entry.isFile() && entry.name.endsWith('.md')) {
                const content = fs.readFileSync(fullPath, 'utf-8');
                files.push({
                    name: entry.name,
                    path: fullPath,
                    content,
                    extension: path.extname(entry.name),
                });
            }
        });
    }

    walkDirectory(resolvedPath);
    return files;
}

// Usage
const obsidianPath = path.join(__dirname, '..', '..', 'obsidian');
const parsedFiles = parseObsidianFiles(obsidianPath);
console.log(`Found ${parsedFiles.length} markdown files`);