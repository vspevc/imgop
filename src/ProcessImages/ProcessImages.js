import OptimizeImages from "../OptimizeImages/OptimizeImages.js";

const ProcessImages = (imagesPath, imagesDirectory) => {
    imagesDirectory.forEach(async (image) => {
        if (image.isFile()) {
            const { name: imageName } = image;

            try {
                await OptimizeImages(imagesPath, imageName);
                console.log(`Done: optimized/${imageName.replace(/\.[^/.]+$/, ".webp")}`);
            }
            catch (error) {
                if (error.message !== "Input file contains unsupported image format") {
                    console.log(error.message);
                }
            }
        }
    });
}

export default ProcessImages;
