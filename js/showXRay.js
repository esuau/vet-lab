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

function printall() {
    var link2 = "img/simulator/" + image_photo();
    document.getElementById("img-photo").setAttribute("src", link2);
    var link = "img/simulator/" + image();
    document.getElementById("img-scan").setAttribute("src", link);
}

function imageExist(url) {
    var img = image();
    img.src = url;
    return img.height != 0;
}