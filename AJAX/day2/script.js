function readFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readFile("movie.json", function(text){
    var data = JSON.parse(text);
    console.log(data);

    $("#title").html(data.title);
    $("#year").html(data.year);
    $("#genre").html(data.genre);
    $("#runtime").html(data.runtime);
    $("#director").html(data.director);
    $("#cast").html(data.cast);
    $("#plot").html(data.plot);
    $("#rating").html(data.rating);
    $("#nrVotes").html(data.nrVotes);
    $("#id").html(data.id);
});