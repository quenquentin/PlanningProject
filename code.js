/* Ce programme est destiné à la création automatique d'un planning selon
certains critères prédéfinis et modifiables. */

/* 4 horaires principaux : 7h45 / 9h30 / 12h15 / nuit (20h) */

let personnel = ["Céline", "Didier", "Roger", "Manon", "Emy"]
let horaire = ["7h45", "9h30", "12h15", "20h", 0]
let results = []


function tirer() {
    let random = Math.floor(Math.random() * personnel.length);
    let random_horaire = Math.floor(Math.random() * horaire.length);

    let choosen = personnel[random]; // selection un mec random depuis le tableau "personnel"
    let choosen_horaire = horaire[random_horaire];

    if (results.some(row => row.includes(choosen)) || results.some(row => row.includes(choosen_horaire))) { // vérifie si "choosen" ou "choosen_horaire" existe déjà dans la matrice "results"
        console.log('Déjà choisi !');
        tirer(); // relance la fonction
    } else {
        results.push([choosen, choosen_horaire]); // met "choosen" et "choosen_horaire" dans la matrice results
        console.log(results);
    }
}

for (let i=1; test <= horaire.length;i++) {
    tirer(); // Permet le nombre de tirage en fonction du nombre d'horaire
} 

function sayName() { 
    for (result of results) {

        if (result[1] === 0) {
            console.log(result[0] + " ne travaillera pas"); // Si le result = 0 permet l'affichage "ne travaillera pas"
        }
        else {
            console.log(result[0] + " travaillera à " + result[1]);
        }
    }
}

sayName();