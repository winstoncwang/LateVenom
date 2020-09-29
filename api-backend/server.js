require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRoutes = require("./controllers/routes.controllers");

const app = express();

app.use(cors());
app.use(userRoutes);
app.use(express.json());

const PORT = process.env.PORT || process.env.LOCAL_PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}....`);
});
