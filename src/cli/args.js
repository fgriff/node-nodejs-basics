const parseArgs = () => {
  const result = process.argv
    .slice(2)
    .reduce((accum, _, idx, arr) => {
      if (idx % 2 && arr[idx - 1].startsWith('--')) {
        const formattedProp = arr[idx - 1].replace('--', '');
        accum.push(`${formattedProp} is ${arr[idx]}`);
      }

      return accum;
    }, [])
    .join(', ');

  console.log(result);
};

parseArgs();
