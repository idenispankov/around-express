const fs = require('fs').promises;
const path = require('path');

// Get File Content and Read It
const getFileContent = (path) => {
  return fs.readFile(path, { encoding: 'utf-8' })
    .then(JSON.parse)
    .catch((err) => console.log(err));
};

module.exports = { getFileContent };
