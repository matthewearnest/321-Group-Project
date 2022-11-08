function loginOnLoad() {
    var loginButton = document.getElementById("loginButton");
    loginButton.onclick = login;
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginRequest = new XMLHttpRequest();
    loginRequest.open("POST", "http://localhost:8080/login");
    loginRequest.setRequestHeader("Content-Type", "application/json");
    loginRequest.send(JSON.stringify({
        username: username,
        password: password
    }));
    loginRequest.onload = function () {
        if (loginRequest.status === 200) {
            window.location.href = "http://localhost:8080/home";
        } else {
            alert("Invalid username or password");
        }
    }
}

// Path: 321-Group-Project\client\html\scripts\salesreports.js