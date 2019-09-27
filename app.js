const mongoose = require('mongoose');
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require('body-parser');


const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;


app.get("/", (req, res) => res.send("This is from Kristina's new project"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

