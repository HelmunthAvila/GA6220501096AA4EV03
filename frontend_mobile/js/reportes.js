const ctx = document.getElementById('ventasChart');

new Chart(ctx, {
type: 'bar',
data: {
labels: ['Oct', 'Nov', 'Dic'],
datasets: [{
label: 'Ventas',
data: [10, 20, 30]
}]
}
});