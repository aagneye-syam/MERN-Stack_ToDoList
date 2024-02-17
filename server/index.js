const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require('./models/ToDo')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test");



PORT = 3001;

app.listen(PORT, () => {
  console.log("Server running in", PORT);
});
