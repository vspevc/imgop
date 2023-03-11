import sharp from "sharp";

const OptimizeImages = async (imagesPath, imageName) => {
    const imagePath = `${imagesPath}${imageName}`;
    const NewImagePath = `${imagesPath}optimized/${imageName}.webp`;

    await sharp(imagePath)
        .webp({ quality: 90 })
        .toFile(NewImagePath);
}

export default OptimizeImages;
