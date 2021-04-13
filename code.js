/* Ce programme est destiné à la création automatique d'un planning selon
certains critères prédéfinis et modifiables. */

/* 4 horaires principaux : 7h45 / 9h30 / 12h15 / nuit (20h) */

let personnel = ["Céline","Didier","Roger","Manon","Emy"]
let horaire = [7,9,12,20,"Rien"]
let result = []


function tirer() {
    let random = Math.floor(Math.random() * personnel.length);
    let random_horaire = Math.floor(Math.random() * horaire.length);
    
    let choosen = personnel[random]; // selection un mec random depuis le tableau "personnel"
    let choosen_horaire = horaire[random_horaire];
    
    if(result.some(row => row.includes(choosen)) || result.some(row => row.includes(choosen_horaire))) { // vérifie si "choosen" ou "choosen_horaire" existe déjà dans la matrice "result"
        console.log('Déjà choisi !');
        return tirer(); // relance la fonction
    } else {
        result.push([choosen,choosen_horaire]); // met "choosen" et "choosen_horaire" dans la matrice result
        console.log(result);
    }
}    

tirer();
tirer();
tirer();
tirer();
tirer();