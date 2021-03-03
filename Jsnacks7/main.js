// Stampa le potenze di 2 fino a 1000.

var numero = 2;

for (var i = 1; i < 20; i++) {
  potenza = numero ** i;
  if (potenza < 1000) {
    console.log(potenza);
  }

}
