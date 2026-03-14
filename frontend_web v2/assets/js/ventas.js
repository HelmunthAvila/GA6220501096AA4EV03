function calcularTotal(){

let subtotales = document.querySelectorAll(".subtotal");

let total = 0;

subtotales.forEach(s => {

total += parseFloat(s.innerText);

});

let descuento = document.getElementById("descuento").value || 0;
let iva = document.getElementById("iva").value || 0;

total = total - (total * descuento / 100);
total = total + (total * iva / 100);

document.getElementById("total").value = total.toFixed(2);

}

document.getElementById("descuento").addEventListener("input",calcularTotal);
document.getElementById("iva").addEventListener("input",calcularTotal);

calcularTotal();

function editar(){ alert("Editar"); }
function ver(){ alert("Ver"); }
function eliminar(){ alert("Eliminar"); }