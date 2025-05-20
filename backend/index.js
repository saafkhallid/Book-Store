import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to mern stack Tutorial");
});
app.listen(PORT, () => {
  console.log(`App is listening to PORT ${PORT}`);
});
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
