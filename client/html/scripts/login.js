const AllEmployeesApiURL = "https://localhost:7125/api/employee";

function loginOnLoad() {
    // var loginButton = document.getElementById("loginButton");
    // loginButton.onclick = login;
    newLogin();

}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    var loginRequest = new XMLHttpRequest();
    loginRequest.open("POST", AllEmployeesApiURL);
    loginRequest.setRequestHeader("Content-Type", "application/json");
    loginRequest.send(JSON.stringify({
        EmployeeUsername: username,
        EmployeePassword: password
    }));
    loginRequest.onload = function() {
        if (loginRequest.status === 200) {
            window.location.href = "file:///C:/Users/mearn/Source/Repos/Fall2022/321Group9Project/321-Group-Project/client/html/search.html";
        } else {
            alert("Invalid username or password");
        }
    };
}

function newLogin(){
    var loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
    
        if (username === "bellaKimbrell" && password === "bella") {
            alert("You have successfully logged in.");
            window.location.href = "file:///C:/Users/mearn/Source/Repos/Fall2022/321Group9Project/321-Group-Project/client/html/adminsearch.html";
        } else {
            loginErrorMsg.style.opacity = 1;
        }
    }
    )
}


function postEmployee() {
    const allDriversApiURL = "https://localhost:7125/api/employee";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch(allDriversApiURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
     
        EmployeeUsername: username,
        EmployeePassword: password

      }),
    }).then((response) => {
        if (loginRequest.status === 200) {
            window.location.href = "file:///C:/Users/mearn/Source/Repos/Fall2022/321Group9Project/321-Group-Project/client/html/search.html";
        } else {
            alert("Invalid username or password");
        }
    });
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

