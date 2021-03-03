// Calcola la somma e la media dei primi 10 numeri.

var somma = 0;

for (var i = 0; i < 10; i++) {
  somma = somma + i;
  //In questo caso durante il ciclo la variabile [i] prende i primi 10 numeri
  // e ogni volta la variabile somma cambia valore
  media = somma / (i + 1);
  //La media si ottiene dividendo le varie somme con il numero della
  //varibile [i] che cambia ad ogni ciclo
}

console.log(somma); //Somma dei primi 10 numeri (da 1 a 10)
console.log(media); //Media dei primi 10 numeri
