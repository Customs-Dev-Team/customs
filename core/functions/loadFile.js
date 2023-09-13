const fs = require("node:fs");
const https = require("https");

function loadFile(owner, repo, filePath, fileName) {
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${filePath}`;

  https
    .get(url, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        fs.writeFile(`${fileName}`, data, (err) => {
          if (err) {
            console.error("Error writing to file:", err);
          }
        });
      });
    })
    .on("error", (err) => {
      console.error("Error fetching file content:", err);
    });
}

module.exports = {
  loadFile,
};
