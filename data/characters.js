const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "starwar.json");

function getCharacters() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading the file:", error);
    return [];
  }
}

module.exports = getCharacters;
