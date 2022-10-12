async function init() {
  let conf = {
    url: "https://keycloak2.reactacademy.live/",
    realm: "react-courses",
    clientId: "august-course",
  };

  //create a keycloak object
  window.keycloak = new Keycloak(conf);

  //init keycloak without iframes
  let auth = await keycloak.init({
    checkLoginIframe: false,
  });

  if (!auth) {
    loginBtn.onclick = (evt) => keycloak.login();
    loginBtn.innerText = "Login ";
  } else {
    loginBtn.onclick = (evt) => keycloak.logout();
    loginBtn.innerText = "Logout";
  }

  console.log(keycloak);

  btnAnonymous.onclick = () => {
    callApi("anonymous");
  };
  btnUser.onclick = () => {
    callApi("user");
  };
  btnAdmin.onclick = () => {
    callApi("admin");
  };
}

window.onhashchange = init;
window.onload = init;

async function callApi(apiToCall) {
  let response = await fetch(`http://localhost:3001/test/${apiToCall}`, {
    method: "GET",
    headers: keycloak?.token
      ? {
          Accept: "application/json",
          Authorization: "Bearer " + keycloak.token,
        }
      : {
          Accept: "application/json",
        },
  });

  if (!response.ok) {
    const text = await response.text();
    return alert(`error ${response.status} ${text}`);
  }

  let result = await response.json();
  alert(result);
}
