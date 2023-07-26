import GetFiles from "./GetFiles/GetFiles.js";
import Options from "./Options/Options.js";
import ProcessImages from "./ProcessImages/ProcessImages.js";

if (Options.format) {
  await ProcessImages(await GetFiles());
}
