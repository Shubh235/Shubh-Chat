var firebaseConfig = {
    apiKey: "AIzaSyBO6hLE0P8d6fu9ylNah6_ndHcXR7ZYWZE",
    authDomain: "shubh-chat-password.firebaseapp.com",
    databaseURL: "https://shubh-chat-password-default-rtdb.firebaseio.com",
    projectId: "shubh-chat-password",
    storageBucket: "shubh-chat-password.appspot.com",
    messagingSenderId: "181682876958",
    appId: "1:181682876958:web:8d15f2f90fdf79187bb40f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
localStorage.removeItem("User_name");
localStorage.removeItem("Room_name");

function Add_User() {
    User_Name = document.getElementById("User_Name").value;
    if (User_Name == firebase.database().rel("Password").value) {
        localStorage.setItem("User_name", "Shubh");
        window.location = "kwitter_Host-room.html";
    } else if (User_Name != "") {
        localStorage.setItem("User_name", User_Name);
        window.location = "kwitter_room.html";
    } else if (User_Name == "") {
        document.getElementById("lbl_error").innerHTML = "Please enter User Name";
        setTimeout(function () {
            document.getElementById("lbl_error").innerHTML = "";
        }, 5000);
    }
}
