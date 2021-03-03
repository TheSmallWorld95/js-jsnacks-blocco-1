// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var festa = ["Fabio", "Marco", "Luca", "Giovanni", "Simone"];

var nome = prompt("Dammi il tuo nome");


var soldatino = false;

for (var i = 0; i < festa.length; i++) {
  if (festa[i] === nome) {
  soldatino = true;
  }
}

if (soldatino) {
  console.log("Prego, puoi entrare");
} else {
  console.log("Mi dispiace ma non sei tra gli invitati alla festa");
}
