import { join } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const read = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const filePath = join(__dirname, 'files', 'fileToRead.txt');
  const errorMessage = 'FS operation failed';

  try {
    const fileContent = await readFile(filePath, { encoding: 'utf8' });
    console.log(fileContent);
  } catch (e) {
    throw new Error(errorMessage);
  }
};

await read();
