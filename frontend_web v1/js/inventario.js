// Buscador de productos

document.getElementById("buscarProducto").addEventListener("keyup", function(){

let filtro = this.value.toLowerCase();

let filas = document.querySelectorAll("#tablaProductos tr");

filas.forEach(function(fila){

let texto = fila.textContent.toLowerCase();

fila.style.display = texto.includes(filtro) ? "" : "none";

});

});


// Abrir formulario de producto

function abrirFormulario(){

alert("Aquí se abrirá el formulario para agregar un nuevo producto");

}


// Editar producto

function editarProducto(){

alert("Editar información del producto");

}


// Eliminar producto

function eliminarProducto(boton){

let fila = boton.parentElement.parentElement;

fila.remove();

alert("Producto eliminado");

}