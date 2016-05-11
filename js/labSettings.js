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
    document.getElementById('text3').value = valeurTemps;
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
    document.getElementById('text3').value = valeurTemps;
}

function modifierIntensiteTemps(){
    document.getElementById('text4').value = valeurIntensite * valeurTemps;
}

var animal = document.getElementById('conf-animal').value;
var corps = document.getElementById('conf-corps').value;
var serie = document.getElementById('conf-serie').value;
var tension = document.getElementById('text').value;
var intensite = document.getElementById('text2').value;
var temps = document.getElementById('text3').value;

function image() {
    var tmp = temps.replace(".",",");
    return animal + "_" + corps + "_" + serie + "_kv" + tension.toString() + "_Ma" + intensite.toString() + "_s" + tmp +".jpg";
}

function image_photo() {
    return animal + "_" + corps + "_" + serie +"_photo.jpeg";
}

function printall() {
    var link = "img/simulator/" + image();
    document.getElementById("img-scan").setAttribute("src", link);
    var link2 = "img/simulator/" + image_photo();
    document.getElementById("img-photo").setAttribute("src", link2);
}