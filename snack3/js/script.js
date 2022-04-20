//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.
//chiedere un numero 
let addN = parseInt(prompt('inserire un numero'));
console.log(addN);

//stampare i suoi numeri precedenti attraverso un ciclo

// for(let i = 1; i  <= addN; i++){
    
//     //eseguire il cubo di questi numeri
//     let cube = i * i * i;
//     console.log(`Numero: ${i} Cubo: ${cube}`);

// }

let i = 0;

while(i < addN){
    i++;
    let cube = i * i * i;
    console.log(`numero: ${i} cubo: ${cube}`);
}




