import { join } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const compressedFilePath = join(__dirname, 'files', 'archive.gz');
  const decompressedFilePath = join(__dirname, 'files', 'fileToCompress.txt');
  const errorMessage = "File 'archive.gz' doesn't exist!";

  try {
    if (!existsSync(compressedFilePath)) {
      throw new Error(errorMessage);
    }

    const unzip = createUnzip();
    const rs = createReadStream(compressedFilePath);
    const ws = createWriteStream(decompressedFilePath);

    rs.pipe(unzip).pipe(ws);
  } catch (e) {
    console.log(e.message);
  }
};

await decompress();
