const express = require('express');
const { PORT = 3000 } = process.env;
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});