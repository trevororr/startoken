const path = require("path");
const fs = require("fs");
const solc = require("solc");

const startokenPath = path.resolve(__dirname, "contracts", "startoken.sol");
const source = fs.readFileSync(startokenPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":startoken"];