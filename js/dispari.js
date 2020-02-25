// chiedi all'utente di inserire un numero pari o Dispari (prompt)
// chiedi all'utente di inserire un numero da 1 a 5 (prompt)
// generiamo un numero random da 1 a 5 (math.random)
// somma i due numeri
// 

var pariODispari = parseInt(prompt("Inserisci un numero pari o dispari"));

var number = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(number);

var numero = generaRandomMinMax(1, 5);
function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroRandom;
}
console.log(numero);

var risultato = number + numero;
console.log(risultato);
