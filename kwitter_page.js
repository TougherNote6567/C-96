var firebaseConfig = {
    apiKey: "AIzaSyDQf0EsJ57TtWVYQbXPsePaRyVRbcKFeCs",
    authDomain: "kwitter-9027c.firebaseapp.com",
    databaseURL: "https://kwitter-9027c-default-rtdb.firebaseio.com",
    projectId: "kwitter-9027c",
    storageBucket: "kwitter-9027c.appspot.com",
    messagingSenderId: "682589131606",
    appId: "1:682589131606:web:c2f46e082d27de87b0fcf7"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name : user_name,
    message : msg,
    likes : 0
});
document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}