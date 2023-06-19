import { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  try {
    // ! Для проверки на ошибки раскомментируйте строчку ниже
    // if (Math.random() > 0.5) throw new Error();

    parentPort.postMessage({
      status: 'resolved',
      data: nthFibonacci(workerData),
    });
  } catch (e) {
    parentPort.postMessage({
      status: 'error',
      data: null,
    });
  }
};

sendResult();
