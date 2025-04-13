const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const medicineRoutes = require("./routes/medicines.js");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/medicines", medicineRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch(err => console.log(err));
