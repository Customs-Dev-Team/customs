const fs = require("node:fs");
function createDir(folderName) {
  fs.mkdir(folderName, (err) => {
    if (err) {
      console.error("Error creating folder:", err);
    }
  });
}

module.exports = {
  createDir,
};
