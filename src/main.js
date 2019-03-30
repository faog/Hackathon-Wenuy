//Inicialización de firebase
  // Initialize Firebase

  var config = {
    apiKey: "AIzaSyAhWyu6Roq1i_XQ7wGroSZprM65sES62pQ",
    authDomain: "hackaton-seguridad.firebaseapp.com",
    databaseURL: "https://hackaton-seguridad.firebaseio.com",
    projectId: "hackaton-seguridad",
    storageBucket: "hackaton-seguridad.appspot.com",
    messagingSenderId: "813122007894"
  };
  firebase.initializeApp(config);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

if(document.getElementById('newaccount')){
  //evento a partir del boton crear cuenta
document.getElementById('newaccount').addEventListener('click',()=>{
  let emailNewUser = document.getElementById('emailnewuser').value;
  let passwordNewUser = document.getElementById('passwordnewuser').value;
  
  /*2.) Código de Firebase para registrar nuevos usuarios*/
  /*firebase.autentificación a partir del email y el password, luego hace una promesa (catch) por si no funciona*/
  firebase.auth().createUserWithEmailAndPassword(emailNewUser, passwordNewUser)        
  .catch(function(error) {
      // Handle Errors here.
      var errorCode = alert(error.code);
      var errorMessage = alert(error.message);       
     
  });  
})  

}


//evento cuando cambia el estado de autentificación
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
        window.location="wall.html";
      

    } else {
      // User is signed out.
      // ...
    }
  });

//evento a partir del boton iniciar sesión
if(document.getElementById('sesionstart')){
document.getElementById('sesionstart').addEventListener('click',()=>{
  let emailUser = document.getElementById('email').value;
  let passwordUser = document.getElementById('password').value;
  
  /*2.) Código de Firebase para usuarios existentes*/
  
  firebase.auth().signInWithEmailAndPassword(emailUser, passwordUser).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  }); 
}) 
}

