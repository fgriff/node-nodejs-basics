import { join } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import { stdin, stdout } from 'process';
import { createInterface } from 'readline';
import { EOL } from 'os';

const write = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const filePath = join(__dirname, 'files', 'fileToWrite.txt');

  const ws = createWriteStream(filePath, { encoding: 'utf8' });

  const rl = createInterface({
    input: stdin,
    output: stdout,
  });

  const exit = () => {
    rl.close();
    ws.end();
  };

  stdout.write(`Enter some text (press CTRL+C to exit):${EOL}`);

  rl.on('line', (text) => {
    ws.write(`${text}${EOL}`);
  });

  rl.on('SIGINT', () => {
    exit();
  });
};

await write();
