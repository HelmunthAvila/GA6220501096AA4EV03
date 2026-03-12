function buscarProducto(){

let filtro = document.querySelector("input").value.toLowerCase();
let cards = document.querySelectorAll(".user-card");

cards.forEach(card => {

let texto = card.innerText.toLowerCase();

card.style.display = texto.includes(filtro) ? "flex" : "none";

});

}