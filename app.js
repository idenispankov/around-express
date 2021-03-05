const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");
const notFoundRouter = require("./routes/notFound");

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect("mongodb://localhost:27017/aroundb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use("/", usersRouter);
app.use("/", cardsRouter);
app.use("/", notFoundRouter);

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
