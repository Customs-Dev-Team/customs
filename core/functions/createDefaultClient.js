const fs = require("node:fs");
const { loadFile } = require("./loadFile");
const { createDir } = require("./createDir");
const { sleep } = require("./sleep");
module.exports = async function createDefaultClient() {
  createDir("handlers");
  createDir("plugins");
  createDir("plugins/default-plugin");
  await sleep(250);
  createDir("plugins/default-plugin/events");
  createDir("plugins/default-plugin/commands");

  loadFile(
    "Customs-Dev-Team",
    "customs-default-client",
    "index.js",
    "index.js"
  );
  loadFile(
    "Customs-Dev-Team",
    "customs-default-client",
    "config.js",
    "config.js"
  );
  loadFile(
    "Customs-Dev-Team",
    "customs-default-client",
    "handlers/commands.js",
    "handlers/commands.js"
  );
  loadFile(
    "Customs-Dev-Team",
    "customs-default-client",
    "handlers/events.js",
    "handlers/events.js"
  );
  loadFile(
    "Customs-Dev-Team",
    "customs-default-client",
    "handlers/register-commands.js",
    "handlers/register-commands.js"
  );
  loadFile(
    "Customs-Dev-Team",
    "customs-default-client",
    "plugins/default-plugin/events/ready.js",
    "plugins/default-plugin/events/ready.js"
  );
  loadFile(
    "Customs-Dev-Team",
    "customs-default-client",
    "plugins/default-plugin/events/runCommands.js",
    "plugins/default-plugin/events/runCommands.js"
  );
  loadFile(
    "Customs-Dev-Team",
    "customs-default-client",
    "plugins/default-plugin/commands/ping.js",
    "plugins/default-plugin/commands/ping.js"
  );
};
