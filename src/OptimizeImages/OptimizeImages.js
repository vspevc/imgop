import sharp from "sharp";
import Options from "../Options/Options.js";

const OptimizeImages = async (imageName) => {
  const { imagesPath, destination, format, imageOptions } = Options;

  const imagePath = `${imagesPath}${imageName}`;
  const NewImagePath = `${destination}${imageName.replace(
    /\.[^/.]+$/,
    `.${format}`
  )}.${format}`;

  await sharp(imagePath).toFormat(format, imageOptions).toFile(NewImagePath);
  //await sharp(imagePath).webp({ quality: 90 }).toFile(NewImagePath);
};

export default OptimizeImages;
