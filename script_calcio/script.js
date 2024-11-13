"use strict"
console.clear();

/* Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

let squadreCalcio = [
    { nome: "Fiorentina", punti: 0, falli: 0 },
    { nome: "Milan", punti: 0, falli: 0 },
    { nome: "Juventus", punti: 0, falli: 0 },
    { nome: "Inter", punti: 0, falli: 0 },
    { nome: "Roma", punti: 0, falli: 0 },
]


function casualNumber() {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    return randomNumber;
}
// console.log(casualNumber());


for (let i = 0; i < squadreCalcio.length; i++) {
    squadreCalcio[i].punti = casualNumber();
    squadreCalcio[i].falli = casualNumber();
}

// for (let key in squadreCalcio) {
//     console.log(squadreCalcio[key]);
// }

let nomiFalli = [];
for (let i = 0; i < squadreCalcio.length; i++) {
    nomiFalli.push({ nome: squadreCalcio[i].nome, falli: squadreCalcio[i].falli });

}
console.log(nomiFalli);
