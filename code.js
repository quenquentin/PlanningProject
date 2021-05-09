/* Ce programme est destiné à la création automatique d'un planning selon
certains critères prédéfinis et modifiables. */

/* 4 horaires principaux : 7h45 / 9h30 / 12h15 / nuit (20h)
TODO: Fonctionnel sur 1 mois entier (cf dates IRL)
=> Envoyer sur un format excel */

function start() {
    const coPersonnel = [] //  Personnel de trvaille 

    for (let i = 1; i <= 7; i++) {
        const { value } = document.getElementById(`tech${i}`); // Remplissage de l'array du personnel
        coPersonnel.push(value);
    }

    const coHoraireS = []; // Horaires de la semaine
    for (let i = 1; i <= 5; i++) {
        const { value } = document.getElementById(`horS${i}`); // Remplissage de l'array des horaires de la semaine
        coHoraireS.push(value);
    }
    while (coPersonnel.length != coHoraireS.length) {
        coHoraireS.push(0);                             // Permet l'affichage des "ne travaillera pas"
    }

    const coHoraireW = []; // Horaires du week-end
    for (let i = 1; i <= 2; i++) {
        const { value } = document.getElementById(`horW${i}`); // Remplissage de l'array des horaires du week-end
        coHoraireW.push(value);
    }
    while (coPersonnel.length != coHoraireW.length) {
        coHoraireW.push(0);                             // Permet l'affichage des "ne travaillera pas"
    }

    let nmDayS = 5; // Nmb de jours dans la semaine
    let nmDayW = 2; // Nmb de jours dans le week-end

    const personnelLenght = coPersonnel.length;
    let personnel = coPersonnel.slice();
    let horaireS = coHoraireS.slice();
    let horaireW = coHoraireW.slice();
    let results = [];

    for (let i = 1; i <= week; i++) {

        console.log("-----NEW WEEK-----")
        for (let i = 1; i <= nmDayS; i++) {
            tirerS();
        }

        for (let i = 1; i <= nmDayW; i++) {
            tirerW();
        }
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
}