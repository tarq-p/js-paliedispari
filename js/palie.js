// crea un prompt di richiesta per la parola palindroma
// creo una funzione di verifica
// verifico tramite console.log

var input = prompt('Inserisci una parola palindroma');
var check = palindroma(input);

function palindroma(input) {
    var reverse = '';
    for (var i = input.length-1; i >= 0; i--) {
        reverse += input[i];
    }
    return reverse;
}

if (input == check) {
    console.log('La parola scelta è palindroma');
} else {
    console.log('La parola scelta non è palindroma');
}
