import { readdir, readFile, writeFile } from 'fs/promises';
import { join, extname } from 'path';

const sourceDir = './src/components'; // Change this to your TypeScript source directory
const outputFile = 'tsx_contents.txt';

async function processTsxFiles(dir) {
  let content = '';

  async function traverse(currentDir) {
    const files = await readdir(currentDir, { withFileTypes: true });

    for (const file of files) {
      const filePath = join(currentDir, file.name);

      if (file.isDirectory()) {
        await traverse(filePath);
      } else if (extname(file.name) === '.tsx') {
        const fileContent = await readFile(filePath, 'utf-8');
        content += `\n\n--- File: ${filePath} ---\n\n${fileContent}`;
      }
    }
  }

  await traverse(dir);
  await writeFile(outputFile, content.trim());
  console.log(`All TSX contents have been saved to ${outputFile}`);
}

processTsxFiles(sourceDir).catch(console.error);