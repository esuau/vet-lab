function image_photo() {
    return document.getElementById('conf-animal').value + "_"
            + document.getElementById('conf-corps').value + "_"
            + document.getElementById('conf-serie').value +"_photo.jpeg";
}

function image() {
    var tmp = document.getElementById('text3').value.replace(".",",");
    return document.getElementById('conf-animal').value + "_"
            + document.getElementById('conf-corps').value + "_"
            + document.getElementById('conf-serie').value + "_kv"
            + document.getElementById('text').value.toString() + "_Ma"
            + document.getElementById('text2').value.toString() + "_s" +
            tmp +".jpg";
}

function imageExist(url) {
    var img = new Image();
    img.src = url;
    return img.height != 0;
}

function printall() {
    var notAvailable = "img/simulator/error-img.png"
    var link2 = "img/simulator/" + image_photo();
    if (imageExist(link2)) {
        document.getElementById("img-photo").setAttribute("src", link2);
    } else {
        document.getElementById("img-photo").setAttribute("src", notAvailable);
    }
    var link = "img/simulator/" + image();
    if (imageExist(link)) {
        document.getElementById("img-scan").setAttribute("src", link);
    } else {
        document.getElementById("img-scan").setAttribute("src", notAvailable);
    }
}