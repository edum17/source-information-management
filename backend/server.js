const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Connection URI
const url =
  "mongodb+srv://dbUser:German1989*@cluster0.tdm2p.mongodb.net/nunsDB?retryWrites=true&w=majority";

// Create a new MongoClient
mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(console.log("connecting"))
  .catch((err) => console.log(`error: ${err}`));

const db = mongoose.connection;
db.once("open", () => {
  console.log("MongoDB database connection established sucessfully");
});

const nunsRoutes = require("./routes/nuns");

app.use("/nuns", nunsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
