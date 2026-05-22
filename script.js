async function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let response = await fetch("users.json");
    let users = await response.json();

    let found = users.find(
        u => u.username === user && u.password === pass
    );

    let msg = document.getElementById("msg");

    if(found){
        msg.innerHTML = "Login Successful";
    } else {
        msg.innerHTML = "Wrong Username or Password";
    }
}
