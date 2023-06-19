import { join } from 'path';
import { fileURLToPath } from 'url';
import { copyFile, mkdir, readdir } from 'fs/promises';

const copy = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const dirPathSrc = join(__dirname, 'files');
  const dirPathDest = join(__dirname, 'files_copy');
  const errorMessage = 'FS operation failed';

  try {
    await mkdir(dirPathDest);

    const folderContent = await readdir(dirPathSrc);

    folderContent.forEach((item) => {
      const filePathSrc = join(dirPathSrc, item);
      const filePathDest = join(dirPathDest, item);

      copyFile(filePathSrc, filePathDest);
    });
  } catch (e) {
    throw new Error(errorMessage);
  }
};

await copy();
