const express = require("express");
const router = express.Router();

const keycloak = require("../config/keycloak-config.js").getKeycloak();

router.get("/anonymous", function (req, res) {
  res.json("Hello Anonymous");
});

router.get("/user", keycloak.protect("app-user"), function (req, res) {
  res.json("Hello User");
});

router.get("/admin", keycloak.protect("app-admin"), function (req, res) {
  res.json("Hello Admin");
});

router.get(
  "/all-user",
  keycloak.protect(["app-user", "app-admin"]),
  function (req, res) {
    res.json("Hello All User");
  }
);


module.exports = router;
