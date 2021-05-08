/* Ce programme est destiné à la création automatique d'un planning selon
certains critères prédéfinis et modifiables. */

/* 4 horaires principaux : 7h45 / 9h30 / 12h15 / nuit (20h) 

TODO : Faire sur 5 jours + 2 jours de weekend avec les horaires ci-dessous
=> 8h / 20h
=> Avec 7 personnes*/

let personnel = ["Céline", "Didier", "Roger", "Manon", "Emy","Maxime","Léa"]
let horaire = ["7h45", "9h30", "12h15", "20h", 0, 0, 0]
let results = []
const horaireLenght = horaire.length;



    function tirer() {
        for (i = 0; i < horaireLenght; i++) {
            let random = Math.floor(Math.random() * personnel.length);
            let random_horaire = Math.floor(Math.random() * horaire.length);
    
            let choosen = personnel[random]; // selection un mec random depuis le tableau "personnel"
            let choosen_horaire = horaire[random_horaire];
            results.push([choosen, choosen_horaire]); // met "choosen" et "choosen_horaire" dans la matrice results
            horaire.splice([random_horaire], 1); // Retirage de la personne + de l'horaire des array
            personnel.splice([random], 1);
    }
    for (result of results) {

        if (result[1] === 0) {
            console.log(result[0] + " ne travaillera pas"); // Si le result = 0 permet l'affichage "ne travaillera pas"
        }
        else {
            console.log(result[0] + " travaillera à " + result[1]);
        }
    }
        }
    tirer();

    