/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array
fino a quando la somma degli elementi è minore di 50.
*/

//creo l'array vuoto
const firstArray = [];

// imposto variabile della somma ed avvio il loop while
// finché la somma sarà minore di 50
let sum = 0;

while (sum < 50) {

    //chiedo all'utente di inserire un numero,
    //che sommerò alla variabile somma
    const userNumber = parseInt(prompt("Inserisci un numero"));
    sum = sum + userNumber;

    //aggiungo i numeri inseriti nell'array
    firstArray.push(userNumber);
}

// stampo gli elementi dell'array e la somma dei numeri inseriti
console.log(firstArray);
console.log(sum);