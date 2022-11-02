const express = require("express");
const app = express();
const port = 3000;
app.listen(port, function () {
  console.log("server is live on  http://localhost:" + port);
});

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
url = "mongodb://localhost:27017";
dbName = "NodeDb";
connectURL = `${url}/${dbName}`;
mongoose.connect(connectURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function main_app() {
  tableSchema = new Schema(
    {
      _id: Number,
      name: String,
      email: String,
      username: String,
      password: String,
    },
    { versionKey: false }
  );
  myTable = await mongoose.model("users", tableSchema);
  deleteMany = await myTable.deleteMany({});
  insert = await myTable.insertMany([
    {
      _id: 1,
      name: "jatin mourya",
      email: "jatinmourya@gmail.com",
      username: "jatinmourya",
      password: "Chuki1234!",
    },
    {
      _id: 2,
      name: "lukik nimase",
      email: "lukik4541@gmail.com",
      username: "lukiklukik",
      password: "nimase123",
    },
    {
      _id: 3,
      name: "aditya shirbhat",
      email: "adityash@gmail.com",
      username: "aditya98",
      password: "12341234",
    },
    {
      _id: 4,
      name: "himesh kohli",
      email: "himya@gmail.com",
      username: "kohlihimesh",
      password: "987654321",
    },
  ]);

  app.get("/", function (req, res) {
    myTable.find({}, function (err, doc) {
      res.send(doc);
    });
  });

  app.get("/find/:id", function (req, res) {
    myTable.find({ _id: req.params.id }, function (err, doc) {
      res.send(doc);
    });
    // database name
    // console.log(dbName);
    // table name
    // console.log(myTable.collection.name);
  });

  app.get("/delete/:id", function (req, res) {
    myTable.findOneAndDelete({ _id: req.params.id }, function (err, doc) {
      res.send(doc);
    });
  });
  // res.send("deleted id " + req.params.id);
  // myTable.deleteOne({ id: req.params.id });
  // console.log(req.params.id);
  // console.log(data);

  // app.post("/update/:where/:name/:email/:username/:password", function (req, res) {
  //   myTable.update(
  //     { _id: req.params.where },
  //     {
  //       $set: {
  //         name: req.params.name,
  //         email: req.params.email,
  //         username: req.params.username,
  //         password: req.params.password,
  //       },
  //     },
  //     function (err, doc) {
  //       res.send("updated", doc);
  //     }
  //   );
  // });

  app.post("/add", (req, res) => {
    res.send(req.body);
    console.log(req.body);
  });

  let data = await myTable.find({});
  return data;
}
// main_app().then(console.log).catch(console.error);
main_app().catch(console.error);
