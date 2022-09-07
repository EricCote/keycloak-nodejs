const express = require("express");
const app = express();
const cors = require("cors");
const session = require('express-session');


const memoryStore = new session.MemoryStore();

const keycloak = require("./config/keycloak-config.js").initKeycloak(memoryStore);


app.use(session({
  secret: 'some secret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

app.use(keycloak.middleware());
app.use(cors());

var apiController = require("./controller/api-controller.js");
app.use("/api", apiController);

app.get("/", function (req, res) {
  res.send("Server is up!");
});

app.listen(3001);
