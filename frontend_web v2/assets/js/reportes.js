/* GRAFICA VENTAS MES */

const ctx1 = document.getElementById('ventasMes');

new Chart(ctx1, {

type: 'bar',

data: {

labels: ['Octubre','Septiembre','Agosto'],

datasets: [{

label: 'Ventas',

data: [150000,120000,180000],

backgroundColor: ['purple','gray','green']

}]

}

});


/* GRAFICA TOTAL */

const ctx2 = document.getElementById('ventasTotales');

new Chart(ctx2, {

type: 'doughnut',

data: {

labels: ['Ventas','Utilidad'],

datasets: [{

data: [150000,50000],

backgroundColor: ['purple','green']

}]

}

});


/* MODAL */

function abrirModal(){

document.getElementById("modalReporte").style.display="flex";

}

function cerrarModal(){

document.getElementById("modalReporte").style.display="none";

}