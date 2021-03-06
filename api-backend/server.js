require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRoutes = require("./controllers/routes.controllers");

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);

//mongoose connection
const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.DB_URL, options);
mongoose.connection.on("error", () => {
  console.log("connection error");
});
mongoose.connection.once("open", () => {
  console.log("db connection successful");
});

const PORT = process.env.PORT || process.env.LOCAL_PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}....`);
});
