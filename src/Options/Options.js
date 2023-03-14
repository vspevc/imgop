import { Command } from "commander";
import sanitizePath from "../utils/SanitizePath.js";

const program = new Command();

program
  .option(
    "-d, --directory <string>",
    "Set the directory you want to optimize images.",
    "./"
  )
  .option(
    "-s, --destination <string>",
    "Set the directory where you want to save the optimized images.",
    "optimized/"
  );

program.parse();

const imagesPath = sanitizePath(program.opts().directory);
const destination = sanitizePath(program.opts().destination, imagesPath);

const Options = {
  imagesPath,
  destination,
};

export default Options;
