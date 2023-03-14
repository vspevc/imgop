import sharp from "sharp";
import Options from "../Options/Options.js";

const OptimizeImages = async (imageName) => {
  const { imagesPath, destination } = Options;

  const imagePath = `${imagesPath}${imageName}`;
  const NewImagePath = `${destination}${imageName}.webp`;

  await sharp(imagePath).webp({ quality: 90 }).toFile(NewImagePath);
};

export default OptimizeImages;
