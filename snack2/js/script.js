//Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

//creare lista nomi
//creare lista cognomi
const nomi = ['marco', 'gabriele', 'thomas', 'elena', 'giulia', 'serena'];
const cognomi = ['bianchi', 'neri', 'rossi', 'lori', 'minniti'];
//inserire nomi creati in array 
//creare array vuoto
let newList = [];

//generare un numero casuale per indice dell array per tre volte

for(let i = 0; i < 3; i++){
    const nRandom = Math.floor(Math.random() * nomi.length);
    const cRandom = Math.floor(Math.random() * cognomi.length);
    console.log(`${nomi[nRandom]} ${cognomi[cRandom]}`);
    //inserire il tutto nell array nuovo
    const addN = newList.push(`${nomi[nRandom]} ${cognomi[cRandom]}`);
    // const addC = newList.push(cognomi[cRandom]);
}

console.log(newList);
