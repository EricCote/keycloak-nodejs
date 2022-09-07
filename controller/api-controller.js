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

//needs either one of these two roles
router.get(
  "/either-role",
  keycloak.protect(["app-user", "app-admin"]),
  function (req, res) {
    res.json("Hello user or admin");
  }
);


module.exports = router;
