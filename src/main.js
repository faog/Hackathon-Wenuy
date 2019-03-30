//Inicialización 
firebase.initializeApp({
    apiKey: "AIzaSyAhWyu6Roq1i_XQ7wGroSZprM65sES62pQ",
    authDomain: "hackaton-seguridad.firebaseapp.com",
    projectId: "hackaton-seguridad"
});
  
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();



//Funcion boton guardar publicación en la base de datos
document.getElementById('messageadd').addEventListener('click',()=>{
 let messageInput=document.getElementById("message").value;
 let situacionSelect = document.getElementById("situacion").value;

    db.collection("users").add({
        message: messageInput,
        situacion: situacionSelect
    
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("message").value='';
        document.getElementById("situacion").value='all';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
})

//funcion postear informacion en el muro (leer de la base de datos)