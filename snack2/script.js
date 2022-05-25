/*
Fai inserire un numero, che chiameremo N, all’utente. 
Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
Ogni volta che ne crei uno, stampalo.
*/

// faccio inserire un numero all'utente
// e creo un array vuoto, che sarà generato successivamente
const numberN = parseInt(prompt("Inserisci un numero"));
const arrayRandom = [];


// creo un ciclo che genererà N array per N numero inserito dall'utente
for (let i = 0; i < numberN; i++) {

    let arrayRandom = [];

    // inserisco un altro ciclo, che inserirà negli array generati prima,
    // 10 numeri casuali da 1 a 100
    for (let y = 0; y < 10; y++) {
        arrayRandom.push(Math.floor(Math.random() * 100));
    }

    console.log(arrayRandom);
}