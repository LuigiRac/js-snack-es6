"use strict"
console.clear();

/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

const biciCorsa = [
    { nome: "bianchi", peso: 15 },
    { nome: "cinelli", peso: 17.5 },
    { nome: "atala", peso: 30 },
    { nome: "casati", peso: 12 },
    { nome: "olmo", peso: 26 }
]

let biciLeggera = biciCorsa[0];
for (let i = 0; i < biciCorsa.length; i++) {
    if (biciCorsa[i].peso < biciLeggera.peso)
        biciLeggera = biciCorsa[i];

}
console.log(biciLeggera);




