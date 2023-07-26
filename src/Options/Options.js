import { Command } from "commander";
import sanitizePath from "../utils/SanitizePath.js";
import CheckImageFormat from "../utils/TrustedImageFormat.js";
import CheckImageQuality from "../utils/CheckImageQuality.js";

const program = new Command();

program
  .option(
    "-d, --directory <path>",
    "Set the directory where are the images to convert.",
    "./"
  )
  .option(
    "-s, --destination <path>",
    "Set the directory where you want to save the new images.",
    "optimized/"
  )
  .option(
    "-f, --format <image format>",
    "Set the image format and file extension.",
    "webp"
  )
  .option(
    "-q, --quality <number 1-100>",
    "Set the image quality level.",
    "80"
  )
  .option(
  "-w, --resize-width <number>",
  "Set the new image width in pixels, it scales the image.",
  "image width (null)"
);

program.parse();
const {
  directory,
  destination,
  resizeWidth,
  format,
  quality
} = program.opts();

const imagesPath = sanitizePath(directory);
const imagesDestination = sanitizePath(destination, imagesPath);

const imagesResizeWidth = Number.isNaN(+resizeWidth)
  ? null
  : +resizeWidth;

let imagesFormat;
const imagesQuality = +quality;

try {
  CheckImageQuality(imagesQuality);

  imagesFormat = CheckImageFormat(format);
} catch (error) {
  console.log(error.message);
}

const Options = {
  imagesPath,
  destination: imagesDestination,
  format: imagesFormat,
  resizeWidth: imagesResizeWidth,
  imageOptions: {
    quality: imagesQuality,
  },
};

export default Options;
