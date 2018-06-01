'use strict';

module.exports = {
    convert
};

var symbols = {
    one: "I",
    five: "V",
    ten: "X",
    fifty: "L",
    hundred: "C",
    fivehundred: "D",
    thousand: "M"
};

var ones = [symbols.one, symbols.five, symbols.ten];
var tens = [symbols.ten, symbols.fifty, symbols.hundred];
var hundreds = [symbols.hundred, symbols.fivehundred, symbols.thousand];

function convert(number) {
    var romanNumber = "";

    romanNumber += translateDigitThousands(Math.floor(number/1000 % 10));
    romanNumber += translateDigit(Math.floor(number/100 % 10), hundreds);
    romanNumber += translateDigit(Math.floor(number/10 % 10), tens);
    romanNumber += translateDigit(Math.floor(number % 10), ones);

    return romanNumber;
}

function translateDigitThousands(digit) {
    var romanThousands = "";
    while (digit-- > 0) {
        romanThousands += symbols.thousand;
    }

    return romanThousands;
}

function translateDigit(digit, symbols) {
    switch (digit) {
    case 0:
        return "";

    case 1:
        return symbols[0];
    case 2:
        return symbols[0] + symbols[0];
    case 3:
        return symbols[0] + symbols[0] + symbols[0];
    case 4:
        return symbols[0] + symbols[1];

    case 5:
    case 6:
    case 7:
    case 8:
        return symbols[1] + translateDigit(digit - 5, symbols);

    case 9:
        return symbols[0] + symbols[2];
    }
}
