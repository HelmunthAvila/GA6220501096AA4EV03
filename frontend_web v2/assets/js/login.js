document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let usuario = document.getElementById("usuario").value;
let password = document.getElementById("password").value;

if(usuario === "" || password === ""){

alert("Debe ingresar usuario y contraseña");

return;

}

/* simulación login */

if(usuario === "admin" && password === "1234"){

alert("Bienvenido al sistema");

window.location.href="pages/dashboard.html";

}else{

alert("Credenciales incorrectas");

}

});