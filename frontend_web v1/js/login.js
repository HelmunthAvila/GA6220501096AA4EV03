// Simulación simple de autenticación

document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let usuario = document.querySelector("input[type='text']").value;
let password = document.querySelector("input[type='password']").value;

if(usuario === "admin" && password === "1234"){

alert("Bienvenido al sistema Amatista SGI");

// redirección al dashboard
window.location.href = "pages/dashboard.html";

}else{

alert("Usuario o contraseña incorrectos");

}

});