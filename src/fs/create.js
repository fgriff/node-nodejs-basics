import { join } from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';

const create = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const destPath = join(__dirname, 'files/fresh.txt');
  const fileContent = 'I am fresh and young';
  const errorMessage = 'FS operation failed';

  try {
    await writeFile(destPath, fileContent, { flag: 'wx' });
  } catch (e) {
    throw new Error(errorMessage);
  }
};

await create();