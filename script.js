// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const john = {
  name: "John",
  lastName: "Silver",
  isAmbassador: true,
};

const simon = {
  name: "Simon",
  lastName: "Creed",
  isAmbassador: true,
};

const prices = [34, 5, 2];
const shippingCost = 50;
const discount = 30;
let buyer = amy; //cambia il valore qui per provare se il tuo algoritmo funziona!

/*let usersArray = [marco, paul, amy, john, simon];
let usersInfo = [];
for (let index = 0; index < usersArray.length; index++) {
  usersInfo.push(usersArray[index]);
}*/

let usersArray = [];
usersArray.push(marco, paul, amy, john, simon);

let ambassadorArray = [];
for (let index = 0; index < usersArray.length; index++) {
  if (usersArray[index].isAmbassador) {
    ambassadorArray.push(usersArray[index]);
    //console.log(usersArray[index].name + " " + usersArray[index].lastName + " é un ambassador");
  } /*else {
    console.log(usersArray[index].name + " " + usersArray[index].lastName + " non é un ambassador");
  }*/
}

let basket = 110;
if(basket > 100) {
  if (usersArray[usersArray.indexOf(buyer)].isAmbassador === true) {
    //console.log(("La tua spesa totale é " + parseFloat(basket*(100-discount)/100) + "€"));
  } else {
    //console.log("La tua spesa totale é " + parseFloat(basket) + "€");
  }
} else {
  if (usersArray[usersArray.indexOf(buyer)].isAmbassador === true) {
    //console.log("La tua spesa totale é " + parseFloat(basket*(100-discount)/100 + shippingCost) + "€");
  } else {
    //console.log("La tua spesa totale é " + parseFloat(basket + shippingCost) + "€");
  }
}

//TODO EXTRA (Se c'è tempo...)
//* Dato un array di numeri interi, stampare in console il doppio del valore dell'elemento (se questo ha indice pari), il triplo se questo ha indice dispari.
// Fornite voi la vostra soluzione...

/*let array = [2, 15, 45, 68, 243, 9, 4, 85, 94, 46];

for (let index = 0; index < array.length; index++) {
  if (array.indexOf(array[index]) % 2 === 0) {
    console.log(array.indexOf(array[index]) * 2);
  } else {
    console.log(array.indexOf(array[index]) * 3);
  }
}*/