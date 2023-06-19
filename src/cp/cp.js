import { join } from 'path';
import { fileURLToPath } from 'url';
import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const filePath = join(__dirname, 'files', 'script.js');

  fork(filePath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['1', '2', '3']);
