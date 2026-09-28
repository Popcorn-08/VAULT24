require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully ✅");
  })
  .catch((error) => {
    console.error("MongoDB Connection Error ❌", error);
  });

app.get("/", (req, res) => {
  res.send("Vault24 Backend Running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});