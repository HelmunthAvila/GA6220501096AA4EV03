// Grafica ventas por mes

const ctx = document.getElementById('ventasMes');

new Chart(ctx, {

type: 'bar',

data: {

labels: ['Ene','Feb','Mar','Abr','May','Jun'],

datasets: [{

label: 'Ventas',

data: [1200000,1800000,1500000,2000000,2400000,1900000],

backgroundColor: '#5b3cc4'

}]

}

});


// Grafica productos vendidos

const ctx2 = document.getElementById('productosVendidos');

new Chart(ctx2, {

type: 'pie',

data: {

labels: ['Teclados','Mouse','Monitores','Impresoras'],

datasets: [{

data: [40,30,20,10],

backgroundColor:[
'#5b3cc4',
'#8b5cf6',
'#a78bfa',
'#c4b5fd'
]

}]

}

});