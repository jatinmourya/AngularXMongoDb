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
url = "mongodb://localhost:27017/";
// url =
// "mongodb+srv://jatinmourya:jatinmourya@cluster0.tattcnd.mongodb.net/?retryWrites=true&w=majority";

// connectURL = `${url}/${dbName}`;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function main_app() {
  tableSchema = new Schema(
    {
      name: String,
      email: String,
      _username: String,
      password: String,
    },
    { versionKey: false }
  );
  myTable = mongoose.model("users", tableSchema);

  deleteMany = await myTable.deleteMany({});
  insert = await myTable.insertMany([
    {
      name: "jatin mourya",
      email: "jatinmourya@gmail.com",
      _username: "jatinmourya",
      password: "Jatin1234!",
    },
    {
      name: "lukik nimase",
      email: "lukik4541@gmail.com",
      _username: "lukiklukik",
      password: "Lukik1234!",
    },
    {
      name: "aditya shirbhat",
      email: "adityash@gmail.com",
      _username: "aditya98",
      password: "Aditya1234!",
    },
    {
      name: "himesh kohli",
      email: "himya@gmail.com",
      _username: "kohlihimesh",
      password: "Himesh1234!",
    },
  ]);

  app.get("/", (req, res) => {
    res.send("this is node server ");
  });
  // find All document
  app.get("/users", async (req, res) => {
    var data = await myTable.find({});
    res.send(data);
  });
  // find document by username
  app.get("/users/:username", async (req, res) => {
    myTable.find({ _username: req.params.username }, function (err, doc) {
      res.send(doc);
    });
  });
  // delete document by username
  app.get("/delete/:username", async function (req, res) {
    myTable.findOneAndDelete(
      { _username: req.params.username },
      function (err, doc) {
        if (doc) {
          res.json({ deleted: doc });
        } else {
          res.json({ response: "not exists" });
        }
      }
    );
  });

  // loggin user
  app.post("/login", (req, res) => {
    // req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
    var _username = req.body.username;
    var password = req.body.password;
    myTable.findOne(
      { _username: _username, password: password },
      (err, doc) => {
        if (doc == null) {
          console.log(doc);
          res.json({ response: false, message: "user doesn't exists" });
        } else {
          console.log(doc);
          res.json({
            response: true,
            data: { username: _username, password: password },
          });
        }
      }
    );
  });

  // Add user to Database
  app.post("/addUser", (req, res) => {
    var _username = req.body.username;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    myTable.findOne({ _username: _username }, (err, doc) => {
      // console.log(doc);
      if (doc == null) {
        obj = { name, _username, email, password };
        // obj = req.body;
        var data = new myTable(obj);
        data.save();
        res.json({
          response: true,
          data: { username: _username, password: password },
        });
        console.log("data saved!!");
      } else {
        res.json({ response: false, message: "user exists" });
        // res.sendStatus(200)
        console.log("user exists");
      }
    });
  });
}
main_app().catch(console.error);
