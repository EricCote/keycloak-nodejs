
const Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    serverUrl: "https://keycloak2.reactacademy.live/",
    realm: "react-courses",
    clientId: "august-course",
    realmPublicKey: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApBAvNIr2JlndzYxCS4/zbr2CEdKtkpfpo3N/6I/150t7ZrWSdDJl0Jr7Bb8215npCG/FzuiP5mLnsslPkP7JUbALJtEduNrQ0mCyrUeLdXoEtuXeLI0rqxsSRxioZED98uA71N1UrsF6I/a58U+cFJqeZ92+zF/a2Ur3MltoT193la0XvxkjFf07u7O92a1EqBCfgwSw1dGpPtK4NMHZCgezKGQXsyTewHapZxz5JDc2gDKOBU9PNOvg1HOCZiEflOCBnceVbEwMRUxtbh0H/3n/Y8B4V4stQhFlUgCKB7p5MGtMPYp5aGVjptCFNVbLse/2qxSlBt2ZAAuE7oIKFwIDAQAB",
    bearerOnly: true,
   
};

function initKeycloak(memoryStore) {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    } 
    else {
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};
