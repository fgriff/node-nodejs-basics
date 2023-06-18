import { join } from "path";
import { fileURLToPath } from "url";
import { rm } from "fs/promises";

const remove = async () => {
  const __dirname = fileURLToPath(new URL(".", import.meta.url));
  const filePath = join(__dirname, "files", "fileToRemove.txt");
  const errorMessage = "FS operation failed";

  try {
    await rm(filePath);
  } catch (e) {
    throw new Error(errorMessage);
  }
};

await remove();
