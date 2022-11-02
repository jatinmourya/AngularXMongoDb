const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser");

// Express settings
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// listening at
app.get("/", function (req, res) {
  // res.send("node server");
  res.send(`<h1>node server</h1> 
  <p>node server node server node server</p>
  `);
});
// listening port
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log("Connected to port http://localhost:" + PORT);
});
// error handling
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// Axios module
// const axios = require("axios");
// Make request
// axios
//   // .get("https://oauth2.googleapis.com/tokeninfo?id_token=XYZ123")
//   .get("https://jsonplaceholder.typicode.com/posts/1")
//   // Show response data
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// google
// const { OAuth2Client } = require("google-auth-library");
// const client = new OAuth2Client('40046088579-vjllj2sjibj423bi3fre5gfvq2nr1is3.apps.googleusercontent.com');
// async function verify() {
//   const ticket = await client.verifyIdToken({
//     idToken: token,
//     audience: '40046088579-vjllj2sjibj423bi3fre5gfvq2nr1is3.apps.googleusercontent.com', // Specify the CLIENT_ID of the app that accesses the backend
//     // Or, if multiple clients access the backend:
//     //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//   });
//   const payload = ticket.getPayload();
//   const userid = payload["sub"];
//   // If request specified a G Suite domain:
//   // const domain = payload['hd'];
// }
// verify().catch(console.error);
