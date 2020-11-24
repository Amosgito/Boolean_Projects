

function inArray() {
    var arrayNew = [];

    for(var i=n1; i<=n2; i++) {
        console.log
    }
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var n1 = 3
    var n2 = 6
}

function printLongestWord() {
    var word1 = prompt("give me first word");
    var word2 = prompt("give me second word");

    var lng1 = word1.length;
    var lng2 = word2.length;

    if (lng1 == lng2) {
        console.log("both length are" + lng1 );
        console.log("word1; ", word1);
        console.log("word2; ", word2);
        
    }else {
        if (lng1 > lng2) {
            console.log("longest word is", lng1)
        }else {
            console.log("longest word is", lng2)
        }
    }
}



function init() {
    printLongestWord();
}

$(document).ready(init);