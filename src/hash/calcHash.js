import { join } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  try {
    const fileContent = await readFile(filePath, { encoding: 'utf8' });

    const hash = createHash('sha256')
      .update(fileContent, 'utf8')
      .digest('hex');

    console.log(hash);
  } catch (e) {
    throw e;
  }
};

await calculateHash();
