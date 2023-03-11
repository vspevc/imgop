import * as fileSystem from "fs/promises";
import ProcessImages from "../ProcessImages/ProcessImages.js";

const GetFiles = async (imagesPath) => {
    try {
        await fileSystem.access(imagesPath);
    } catch (error) {
        console.log(`${imagesPath} does not exists.`);
        return;
    }

    if (imagesPath[imagesPath.length - 1] !== '/') {
        imagesPath += '/';
    }

    const optimizedDirectory = imagesPath + 'optimized/';

    try {
        await fileSystem.access(optimizedDirectory);
    } catch (error) {
        await fileSystem.mkdir(optimizedDirectory);
    }

    const imagesDirectory = await fileSystem.readdir(imagesPath, { withFileTypes: true });

    await ProcessImages(imagesPath, imagesDirectory);
}

export default GetFiles;
