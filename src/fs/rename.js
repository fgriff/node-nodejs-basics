import { join } from "path";
import { fileURLToPath } from "url";
import { rename as renameFile } from "fs/promises";

const rename = async () => {
  const __dirname = fileURLToPath(new URL(".", import.meta.url));
  const oldFilePath = join(__dirname, "files", "wrongFilename.txt");
  const newFilePath = join(__dirname, "files", "properFilename.md");
  const errorMessage = "FS operation failed";

  try {
    await renameFile(oldFilePath, newFilePath);
  } catch (e) {
    throw new Error(errorMessage);
  }
};

await rename();
