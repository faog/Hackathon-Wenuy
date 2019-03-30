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
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
       alert(user.email);      
    } else {
      window.location='index.html';
    }
});


window.onload=(()=>{
    document.getElementById("sesionclose").addEventListener('click',()=>{
        firebase.auth().signOut();
    });
})
