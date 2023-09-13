#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];

const fs = require("fs");

try {
  const commandFunction = require(`../commands/${command}.js`);
  const commandArgs = args.slice(1);
  commandFunction(...commandArgs);
} catch (err) {
  console.log(err);
}
