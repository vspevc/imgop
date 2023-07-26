import * as fileSystem from "fs/promises";
import Options from "../Options/Options.js";

const GetFiles = async () => {
  const { imagesPath } = Options;

  try {
    await fileSystem.access(imagesPath);
  } catch (error) {
    console.log(`${imagesPath} does not exists.`);
    return;
  }

  const imagesDirectory = await fileSystem.readdir(imagesPath, {
    withFileTypes: true,
  });

  return imagesDirectory;
};

export default GetFiles;
