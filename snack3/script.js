/*
Il software deve chiedere per 5 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti.
*/

let i = 0;
sum = 0;

while (i < 5) {
    const numbersUser = parseInt(prompt("Inserisci un numero"));
    sum += numbersUser;

    i++;
}

console.log(sum);