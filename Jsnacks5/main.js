// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var numero = []

var numeri = 0

for (var i = 0; i < 6; i++) {
  numeri = parseInt(prompt("Inserisci un numero"));
  if (numeri%2) {
    numero.push(numeri);
  }
}

console.log(numero);
