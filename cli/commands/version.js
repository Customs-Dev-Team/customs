module.exports = (args) => {
  const data = require("../../package.json");
  console.log(`Version: ${data.version}`);
};
