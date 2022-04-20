//SNACK 1
// Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

//FOR
//chiedere un numero per 5 volte

let num;
let sum = 0;

for(let i = 0; i < 5; i++){
    num = parseInt(prompt('inserisci un numero'));
    console.log(num);
    //stampare la somma di tutti i numeri
    if(!isNaN(num)){
        sum += num;
    } else{
        alert('il valore inserito non e corretto');
    }
}

console.log('Totale:' + sum);

//WHILE
//chiedere un numero per 5 volte 
// let i = 0;
// let num;
// let sum = 0;

// while(i < 5){
//     num = parseInt(prompt('inserire un numero'));
//     console.log(num);
//     if (!isNaN(num)) {
//         i++;
//         sum += i;
//     } else{
//         alert('il valore inserito non e corretto');
//     }
// }

// console.log('Totale:' + sum);
