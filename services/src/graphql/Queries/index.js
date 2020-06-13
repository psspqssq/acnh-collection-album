/*import fs from "fs";
import path from "path";

const thisFile = path.basename(__filename);
const fieldsObj = {};

fs.readdirSync(__dirname)
  .filter((filename) => !filename.startsWith(".") && filename !== thisfile)
  .forEach((filename) => {
    const filenameWithoutExtension = filename.replace(/\..+$/, "");
    fieldsObj[
      filenameWithoutExtension
    ] = require(`./${filenameWithoutExtension}`).default;
  });

export default () => fieldsObj;
*/

export { default as houseware } from "./houseware";
export { default as housewares } from "./housewares";
