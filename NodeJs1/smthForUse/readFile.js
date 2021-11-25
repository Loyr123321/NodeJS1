

const file = require('fs');


function readFile(filePath) {
  if (file.existsSync(filePath)) {
    return file.readFileSync(filePath);
  }
}

module.exports = { readFile };