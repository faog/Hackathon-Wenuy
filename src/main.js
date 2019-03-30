//Inicialización 
firebase.initializeApp({
    apiKey: "AIzaSyAhWyu6Roq1i_XQ7wGroSZprM65sES62pQ",
    authDomain: "hackaton-seguridad.firebaseapp.com",
    projectId: "hackaton-seguridad"
});
  
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();



//Funcion boton guardar publicación en la base de datos
if(document.getElementById('messageadd')){
    document.getElementById('messageadd').addEventListener('click',()=>{
    let messageInput=document.getElementById("message").value;
    let situacionSelect = document.getElementById("situacion").value;
    let nameUser="Macarena Terán";
    let date=Date.now();

        db.collection("users").add({
            name: nameUser,
            message: messageInput,
            situacion: situacionSelect,
            date:date
        
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
}

//funcion postear informacion en el muro (leer de la base de datos)
let containerMessage=document.getElementById("result");
db.collection("users").onSnapshot((querySnapshot) => {
    containerMessage.innerHTML="";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().message}`);
        containerMessage.innerHTML +=
        `
            <h4 id="name">${doc.data().name}<h4>
            <h6 id="hash"><strong style=font-weight:bold;>#${doc.data().situacion}</strong>${doc.data().message}</h6>            

        <!--<button id="delete">Eliminar</button>-->`
    });
});

//Funcion para borrar un dato
/*if(document.getElementById('delete')){
    document.getElementById('delete').addEventListener('click',()=>{
        let id= document.getElementById(${doc.id).value;
        db.collection("users").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    })
} */



