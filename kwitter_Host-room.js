var firebaseConfig = {
    apiKey: "AIzaSyA0KS-wOuheBkpAQoJDNsXhPLLIEIvHrGg",
    authDomain: "shubh-chat-c63b3.firebaseapp.com",
    databaseURL: "https://shubh-chat-c63b3-default-rtdb.firebaseio.com",
    projectId: "shubh-chat-c63b3",
    storageBucket: "shubh-chat-c63b3.appspot.com",
    messagingSenderId: "243848610272",
    appId: "1:243848610272:web:20ddcabc5bab81e1202b85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var Name = localStorage.getItem("User_name");
document.getElementById("User_Name").innerHTML = ("Welcome " + Name + "!");

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><img src='Right_Arrow.png' onclick='Move()' id='Arrow'><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function Move() {
    window.location = "kwitter_Edit.html";
}

function Logout() {
    localStorage.removeItem("User_name");
    localStorage.removeItem("Room_name");
    window.location = "index.html";
}

function addRoom() {
    Room_Name = document.getElementById("Room_Name").value;
    if (Room_Name == "") {
        document.getElementById("lbl_error").innerHTML = "Please enter Room name";
        setTimeout(function () {
            document.getElementById("lbl_error").innerHTML = "";
        }, 5000);
    } else if (Room_Name != "") {
        firebase.database().ref("/").child(Room_Name).update({
            purpose: "adding room name"
        });
        localStorage.setItem("Room_name", Room_Name);
        window.location = "kwitter_page.html";
    }
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("Room_name", name);
    window.location = "kwitter_page.html"
}
