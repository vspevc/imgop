import sharp from "sharp";
import Options from "../Options/Options.js";

const OptimizeImages = async (imageName) => {
  const { imagesPath, destination, format, imageOptions } = Options;

  const imagePath = `${imagesPath}${imageName}`;
  const NewImagePath = `${destination}${imageName.replace(
    /\.[^/.]+$/,
    `.${format}`
  )}`;

  await sharp(imagePath).toFormat(format, imageOptions).toFile(NewImagePath);
};

export default OptimizeImages;
