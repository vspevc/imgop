import * as fileSystem from "fs/promises";
import OptimizeImages from "../OptimizeImages/OptimizeImages.js";
import Options from "../Options/Options.js";

const ProcessImages = async (imagesDirectory) => {
  const { destination, format } = Options;

  try {
    await fileSystem.access(destination);
  } catch (error) {
    await fileSystem.mkdir(destination);
  }

  for (const image of imagesDirectory) {
    if (image.isFile()) {
      const { name: imageName } = image;

      try {
        await OptimizeImages(imageName);
        console.log(
          `Done: ${destination}${imageName.replace(/\.[^/.]+$/, `.${format}`)}`
        );
      } catch (error) {
        if (error.message !== "Input file contains unsupported image format") {
          console.log(error.message);
        }
      }
    }
  }

  const destinationDirectory = await fileSystem.readdir(destination);

  if (!destinationDirectory.length) {
    await fileSystem.rmdir(destination);
  }
};

export default ProcessImages;
