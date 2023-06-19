import { Transform } from 'stream';
import { stdin, stdout } from 'process';
import { EOL } from 'os';

const transform = async () => {
  const strTransform = new Transform({
    transform(chunk, _, callback) {
      const reversedStr = chunk
        .toString('utf8')
        .replace(EOL, '')
        .split('')
        .reverse()
        .join('') + EOL;

      this.push(reversedStr);
      callback();
    },
  });

  stdout.write(`Enter some text (press CTRL+C to exit):${EOL}`);
  stdin.pipe(strTransform).pipe(stdout);
};

await transform();
