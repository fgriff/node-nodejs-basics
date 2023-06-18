const parseEnv = () => {
  const keys = Object
    .entries(process.env)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(keys);
};

parseEnv();
