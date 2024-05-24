const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { scoringPoints } = require("./calculate");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/pets_list")
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Define a schema
const Schema = mongoose.Schema;
const petSchema = new Schema({
  name: String,
  description: String,
  points: Number,
  img: String,
});

// Create a model
const Pet = mongoose.model("pets", petSchema);

let pets = [];

app.get("/pets", async (req, res) => {
  try {
    pets = await Pet.find({});
    //console.log('Received pets:', pets);
    res.send(pets);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

/////////////////////////////////////////////////////////////////////////////

let userAnimals = "";
let receivedData;

app.post("/api/data", async (req, res) => {
  receivedData = req.body;
  console.log("Data received:", receivedData);
  try {
    userAnimals = await scoringPoints(receivedData, pets);

    console.log(userAnimals);
    res.send("Data received successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

////////////////////////////////////////////////

app.get("/pets/data", async (req, res) => {
  await res.send(userAnimals);
});

/////////////////////////////////////
const server = app.listen(port, () => {
  console.log(`Server is active! ${port}`);
});
server.on("error", (error) => {
  console.error("Server failed to start:", error);
});
