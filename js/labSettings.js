/**
 * Created by GRP1 on 11/05/2016.
 */

var valeurTension   = 80; // Default value for tension
var valeurIntensite = 150;
var valeurTemps     = 0.050;
var index           = 3;

function modifierTension(increment) {
    if (valeurTension+increment > 45 && valeurTension+increment < 115) {
        valeurTension += increment;
    }
    document.getElementById('text').value=valeurTension;
}

function modifierIntensite(increment) {
    if (valeurIntensite+increment > 0 && valeurIntensite+increment < 350) {
        valeurIntensite += increment;
    }
    document.getElementById('text2').value = valeurIntensite;
}

function modifierTempsPlus() {

    if (index<6) {
        index++;
    }

    switch (index) {
        case 1:
            valeurTemps = -0.010;
            break;
        case 2:
            valeurTemps = 0.020;
            break;
        case 3:
            valeurTemps = 0.05;
            break;
        case 4:
            valeurTemps = 0.0750;
            break;
        case 5:
            valeurTemps = 0.1;
            break;
        case 6:
            valeurTemps = 0.15;
            break;
    }
    document.getElementById('text3').value = valeurTemps.toFixed(2);
}

function modifierTempsMoins() {

    if (index > 1) {
        index--;
    }

    switch (index) {
        case 1:
            valeurTemps = -0.010;
            break;
        case 2:
            valeurTemps = 0.020;
            break;
        case 3:
            valeurTemps = 0.05;
            break;
        case 4:
            valeurTemps = 0.0750;
            break;
        case 5:
            valeurTemps = 0.1;
            break;
        case 6:
            valeurTemps = 0.15;
            break;
    }
    document.getElementById('text3').value = valeurTemps.toFixed(2);
}

function modifierIntensiteTemps(){
    document.getElementById('text4').value = valeurIntensite * valeurTemps;
}