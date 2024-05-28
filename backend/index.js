import express from "express";
import { uri } from "./config.js";
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js"

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! This is the node API server!");
});

app.post("/api/products", (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("App connectioned to DB");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
