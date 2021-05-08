/* Ce programme est destiné à la création automatique d'un planning selon
certains critères prédéfinis et modifiables. */

/* 4 horaires principaux : 7h45 / 9h30 / 12h15 / nuit (20h)*/

const coPersonnel = ["Céline", "Didier", "Roger", "Manon", "Emy", "Maxime", "Léa"] // Personnel 
const coHoraireS = ["7h45", "9h30", "12h15", "20h", 0, 0, 0] // Horaires de semaine
const coHoraireW = ["8h", "20h", 0, 0, 0, 0, 0] // Horaires du week-end
let results = []
const personnelLenght = coPersonnel.length;

let personnel = coPersonnel.slice();
let horaireS = coHoraireS.slice();
let horaireW = coHoraireW.slice();
let nmDayS = 5;
let nmDayW = 2;

for (let i = 0; i < nmDayS; i++) {
    tirerS();
}

for (let i = 0; i < nmDayW; i++) {
    tirerW();
}

function tirerS() {
    for (i = 0; i < personnelLenght; i++) {
        let random = Math.floor(Math.random() * personnel.length);
        let random_horaire = Math.floor(Math.random() * horaireS.length);

        let choosen = personnel[random]; // selection un mec random depuis le tableau "personnel"
        let choosen_horaire = horaireS[random_horaire];
        results.push([choosen, choosen_horaire]); // met "choosen" et "choosen_horaire" dans la matrice results
        horaireS.splice([random_horaire], 1); // Retire la personne + l'horaire des array
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
    console.log("------------------");
    personnel = coPersonnel.slice();
    horaireS = coHoraireS.slice();
    results = [];
}

function tirerW() {
    for (i = 0; i < personnelLenght; i++) {
        let random = Math.floor(Math.random() * personnel.length);
        let random_horaire = Math.floor(Math.random() * horaireW.length);

        let choosen = personnel[random]; // selection un mec random depuis le tableau "personnel"
        let choosen_horaire = horaireW[random_horaire];
        results.push([choosen, choosen_horaire]); // met "choosen" et "choosen_horaire" dans la matrice results
        horaireW.splice([random_horaire], 1); // Retire la personne + l'horaire des array
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
    console.log("------------------");
    personnel = coPersonnel.slice();
    horaireW = coHoraireW.slice();
    results = [];

}