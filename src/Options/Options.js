import { Command } from "commander";
import sanitizePath from "../utils/SanitizePath.js";
import CheckImageFormat from "../utils/TrustedImageFormat.js";
import CheckImageQuality from "../utils/CheckImageQuality.js";

const program = new Command();

program
  .option(
    "-d, --directory <path>",
    "Set the directory you want to optimize images.",
    "./"
  )
  .option(
    "-s, --destination <path>",
    "Set the directory where you want to save the optimized images.",
    "optimized/"
  )
  .option(
    "-f, --format <image format>",
    "Set the image format and file extension.",
    "webp"
  )
  .option(
    "-q, --quality <number 1-100>",
    "Set the image option quality level.",
    "80"
  );

program.parse();

const imagesPath = sanitizePath(program.opts().directory);
const destination = sanitizePath(program.opts().destination, imagesPath);

let format = null;
const imageQuality = +program.opts().quality;

try {
  CheckImageQuality(imageQuality);

  format = CheckImageFormat(program.opts().format);
} catch (error) {
  console.log(error.message);
}

const Options = {
  imagesPath,
  destination,
  format,
  imageOptions: {
    quality: imageQuality,
  },
};

export default Options;
