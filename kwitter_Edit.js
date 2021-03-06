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
User_name = localStorage.getItem("User_name");
Room_name = localStorage.getItem("Room_name");
document.getElementById("Edit_data").innerHTML = localStorage.getItem("Room_name");

function Cancel() {
    window.location = "kwitter_Host-room.html";
}

function Edit() {
    Data = document.getElementById("Edit_data").value;
    Edit_Data(Data);
}

function Edit_Data(Name) {
    firebase.database().rel(Room_name).edit({
        Room_name: Name
    });
}

function Delete() {
    firebase.database().rel(Room_name).removeValue;
}
