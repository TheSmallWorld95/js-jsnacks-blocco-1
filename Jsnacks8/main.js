// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var numero = prompt("Inserisci un numero di 4 cifre");

console.log(numero);

var somma = 0

for (var i = 0; i < numero.length; i++) {
  somma = somma + parseInt(numero.charAt(i)); //Prendo il primo numero di EX 1234 quindi 1
  // Ogni volta che riparte il ciclo la stringa somma aumenta di 1 e viene sommata al secondo numero di 1234 quindi 1(somma) + 2(secondo numero) = 3
}

console.log(somma);
