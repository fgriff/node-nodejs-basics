import { join } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const initFilePath = join(__dirname, 'files', 'fileToCompress.txt');
  const compressedFilePath = join(__dirname, 'files', 'archive.gz');
  const errorMessage = "File 'fileToCompress.txt' doesn't exist!";

  try {
    if (!existsSync(initFilePath)) {
      throw new Error(errorMessage);
    }

    const gzip = createGzip();
    const rs = createReadStream(initFilePath);
    const ws = createWriteStream(compressedFilePath);

    rs.pipe(gzip).pipe(ws);
  } catch (e) {
    console.log(e.message);
  }
};

await compress();
