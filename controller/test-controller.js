var express = require('express');
var router = express.Router();

const keycloak = require('../config/keycloak-config.js').getKeycloak();


router.get('/anonymous', function(req, res){
    res.send("Hello Anonymous");
});
router.get('/user', keycloak.protect("app-user"),function(req, res){
    res.send("Hello User");
});

router.get('/admin', keycloak.protect("app-admin"),function(req, res){
    res.send("Hello Admin"); 
});

router.get('/all-user', keycloak.protect(['app-user','app-admin']), function(req, res){
    res.send("Hello All User"); 
});

module.exports = router;