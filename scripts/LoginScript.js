function CriarConta() {
    window.location.href = "CreateAccount.html";
}

function Login() {
    window.location.href = "login.html";
}

document.getElementById("Creating Account").addEventListener("click", CriarConta);
document.getElementById("Doing login").addEventListener("click", Login);
