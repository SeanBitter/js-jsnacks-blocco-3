/*
In un array sono contenuti i nomi degli invitati alla festa
del grande Gatsby, chiedi all’utente il suo nome
e comunicagli se può partecipare o no alla festa. 
Interrompi il ciclo appena il nome è stato trovato.
*/

const listGuests = ["Pippo", "Paperino", "Pluto", "Roger", "Paolo", "Topolino", "Elsha" ];
const nameUser = prompt("Sei uno degli invitati? Qual è il tuo nome?")

let i = 0;

userAccepted = false;

while (i < listGuests.length) {
    
    if (nameUser === listGuests[i]) {
        userAccepted = true;
        alert("Ti aspettiamo alla festa!");
    } else {
        i++;
        alert("Non sei tra gli invitati");
    }
    
}
