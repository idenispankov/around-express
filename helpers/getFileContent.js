const fs = require('fs').promises;

// Get File Content and Read It
const getFileContent = (path) => {
  return fs.readFile(path, { encoding: 'utf-8' })
    .then(JSON.parse)
    .catch((res, req) => {
      return res.status(500).send({ message: 'Internal Server Error' });
    });
};

module.exports = { getFileContent };
