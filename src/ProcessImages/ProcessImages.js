import OptimizeImages from "../OptimizeImages/OptimizeImages.js";
import Options from "../Options/Options.js";

const ProcessImages = (imagesDirectory) => {
  const { destination } = Options;

  imagesDirectory.forEach(async (image) => {
    if (image.isFile()) {
      const { name: imageName } = image;

      try {
        await OptimizeImages(imageName);
        console.log(
          `Done: ${destination}${imageName.replace(/\.[^/.]+$/, ".webp")}`
        );
      } catch (error) {
        if (error.message !== "Input file contains unsupported image format") {
          console.log(error.message);
        }
      }
    }
  });
};

export default ProcessImages;
