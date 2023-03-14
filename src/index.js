import GetFiles from "./GetFiles/GetFiles.js";
import Options from "./Options/Options.js";

if (Options.format) {
  await GetFiles("./");
}
