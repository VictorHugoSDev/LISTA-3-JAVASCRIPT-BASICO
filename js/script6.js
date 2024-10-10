var min = 1;
var max = 60;
var nrosUnicos = new Set();

while(nrosUnicos.size < 6){
    var nroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    nrosUnicos.add(nroAleatorio);
}

var nrosSorteados = Array.from(nrosUnicos);

document.write(`<h1>NÚMEROS DA MEGA-SENA`)
document.write(`<p>${nrosSorteados.join(' - ')}</p>`);