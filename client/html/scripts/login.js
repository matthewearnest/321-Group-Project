function loginOnLoad() {
    var loginButton = document.getElementById("loginButton");
    loginButton.onclick = login;
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginRequest = new XMLHttpRequest();
    loginRequest.open("POST", "/login");
    loginRequest.setRequestHeader("Content-Type", "application/json");
    loginRequest.send(JSON.stringify({
        username: username,
        password: password
    }));
    loginRequest.onload = function() {
        if (loginRequest.status === 200) {
            window.location.href = "file:///C:/Users/mearn/Source/Repos/Fall2022/321Group9Project/321-Group-Project/client/html/search.html";
        } else {
            alert("Invalid username or password");
        }
    };
}

function signupOnLoad() {
    var signupButton = document.getElementById("signupButton");
    signupButton.onclick = signup;
}

function signup() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var signupRequest = new XMLHttpRequest();
    signupRequest.open("POST", "/signup");
    signupRequest.setRequestHeader("Content-Type", "application/json");
    signupRequest.send(JSON.stringify({
        username: username,
        password: password
    }));
    signupRequest.onload = function() {
        if (signupRequest.status === 200) {
            window.location.href = "/home";
        } else {
            alert("Username already exists");
        }
    };
}

// Path: 321-Group-Project\client\html\scripts\salesreports.js

