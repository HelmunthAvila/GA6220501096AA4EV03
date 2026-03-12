function calcularTotal(){

let precios = document.querySelectorAll(".precio");
let total = 0;

precios.forEach(p => {

total += parseFloat(p.dataset.valor);

});

document.querySelector("#total").innerText = total;

}