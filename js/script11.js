var cartaUnica = new Set();

while(cartaUnica.size < 12){
    var cartaSorteada = Math.floor(Math.random() * 27) + 1;
    cartaUnica.add(cartaSorteada);
}

var cartasSorteadas = Array.from(cartaUnica);

for(var i = 0; i < 4; i++){
    document.write(`<h1>CARTA SORTEADA JOGADOR ${i + 1}</h1>`)
    for(var j = 0; j < 3; j++){
        document.write(`<img src="cartas/carta${cartasSorteadas[i * 3 + j]}.png">`);
    }
}
