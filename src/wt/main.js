import { join } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
  const workers = cpus().map((_, idx) => {
    return new Promise((resolve, reject) => {
      const __dirname = fileURLToPath(new URL('.', import.meta.url));
      const filePath = join(__dirname, 'worker.js');

      const worker = new Worker(filePath, { workerData: idx + 10 });

      worker.on('message', (message) => resolve(message));
      worker.on('error', (error) => reject(error));
      worker.on('exit', (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped. Exit code ${code}`));
        }
      });
    });
  });

  const res = await Promise.all(workers);
  console.log(res);
};

await performCalculations();
