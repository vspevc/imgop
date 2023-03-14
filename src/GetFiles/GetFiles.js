import * as fileSystem from "fs/promises";
import ProcessImages from "../ProcessImages/ProcessImages.js";
import Options from "../Options/Options.js";

const GetFiles = async () => {
  const { imagesPath, destination } = Options;

  try {
    await fileSystem.access(imagesPath);
  } catch (error) {
    console.log(`${imagesPath} does not exists.`);
    return;
  }

  try {
    await fileSystem.access(destination);
  } catch (error) {
    await fileSystem.mkdir(destination);
  }

  const imagesDirectory = await fileSystem.readdir(imagesPath, {
    withFileTypes: true,
  });

  await ProcessImages(imagesDirectory);
};

export default GetFiles;
