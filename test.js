async function init() {

  //url=http://localhost:8443&realm=Demo-Realm&client=myclient
  let conf ={ url:"https://localhost:8443", realm: "Demo-Realm", clientId:"myclient"};

 
    
    //create a keycloak object
    window.keycloak = new Keycloak(conf);
    
    //init keycloak without iframes
    let auth = await keycloak.init({
        checkLoginIframe: false,
      });


    if (!auth) { keycloak.login() }
    
    console.log(auth);

    let name =
    keycloak.tokenParsed["given_name"] +
    " " +
    keycloak.tokenParsed["family_name"];

    console.log ("-------")
    console.log (name);
}


window.onhashchange = init;
window.onload = init;
