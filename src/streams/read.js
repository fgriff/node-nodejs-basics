import { join } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';
import { stdout } from 'process';
import { EOL } from 'os';

const read = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const filePath = join(__dirname, 'files', 'fileToRead.txt');

  const rs = createReadStream(filePath, { encoding: 'utf8' });
  rs.on('data', (chunk) => stdout.write(`${chunk}${EOL}`));
};

await read();
