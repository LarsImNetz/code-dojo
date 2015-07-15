var text = document.querySelector('article').innerHTML;
// alert(text.length);

var words = text.split(/[.,;:!?"'\s]+/);

var average = function(sum, number) {
    var av = sum / number;
    av = av.toFixed(1);
    av = av.replace('.',',');
    return av;
}


// document.write("Textlänge <i>" + text.length + "</i>");
console.log("Text: Durchschnittliche Länge der Wörter: " + average(text.length, words.length));
