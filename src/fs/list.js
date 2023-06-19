import { join } from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';

const list = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const dirPath = join(__dirname, 'files');
  const errorMessage = 'FS operation failed';

  try {
    const filesList = await readdir(dirPath);
    filesList.forEach((file) => console.log(file));
  } catch (e) {
    throw new Error(errorMessage);
  }
};

await list();
