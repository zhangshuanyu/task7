function bottles(i) {
    var lyrics = "";
    if(i >= 2){
        lyrics = "    " + i + " bottles of beer on the wall, " + i + " bottles of beer.\n";
        if(i > 2){
            lyrics += "    Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.\n";
        }
        else if(i === 2){
            lyrics += "    Take one down and pass it around, " + "1 bottle of beer on the wall.\n";
        }
    }

    else if(i === 1){
        lyrics = "    1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "    Take one down and pass it around, no more bottles of beer on the wall.\n" ;
    }
    else{
        lyrics += "    No more bottles of beer on the wall, no more bottles of beer.\n" +
            "    Go to the store and buy some more, 99 bottles of beer on the wall."
    }
    return lyrics;
}

function main(number){

    if(number === undefined){
        return "";
    }
    var result = [];
    var k = number;

    for(var i=number; i>=0; i--){
        var lyr = bottles(i);
        result.push(lyr);
    }
    return result;

}

module.exports = main;