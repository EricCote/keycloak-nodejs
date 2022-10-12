const Keycloak = require("keycloak-connect");

let _keycloak;

var keycloakConfig = {
  serverUrl: "https://keycloak2.reactacademy.live/",
  realm: "react-courses",
  clientId: "august-course",
  realmPublicKey:
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlgE18nhFEu2S2b4O5GXq4Wk1d1YxSnhmFHwt9F77gCgqEZkeNNWSghBYwybyNuisIDsFwccJzaOQjUj9Trq51S0u6EtKtXlhNd5R8GjIkj7aUJ30bsruGwISt8EAbNhxdDq8ODNuDpM0ONENDFuPgivLHcBAFSeap4MviW2qmPZv4DXdUVUbK/1/zM2VuURM+8xzEa92BbZhHZJM49r4nIi4aprtXIW+KDs301P35WY7CXIO4tebaX2voPt7jIFhVCOaoQyTeM+eO6Co0IJggQqOj6M/2vfW7ipBxRHmw76fOjlpm8SMj7eMtHKyJxGpskliF5VG01it69sKm+7XgwIDAQAB",
  bearerOnly: true,
};

function initKeycloak(memoryStore) {
  if (_keycloak) {
    console.warn("Trying to init Keycloak again!");
    return _keycloak;
  } else {
    _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
    return _keycloak;
  }
}

function getKeycloak() {
  if (!_keycloak) {
    console.error(
      "Keycloak has not been initialized. Please called init first."
    );
  }
  return _keycloak;
}

module.exports = {
  initKeycloak,
  getKeycloak,
};
