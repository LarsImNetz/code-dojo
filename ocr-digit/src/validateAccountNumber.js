/**
 * Wir erwarten eine Account Nummer, die wir prüfen wollen.
 *
 * 123456789 => '123456789'
 *
 * '1  2  3  4  5  6  7  8  9'
 * d9 d8 d7 d6 d5 d4 d3 d2 d1
 * (d1 + 2*d2 + 3*d3 + ... + 9*d9) mod 11 = 0 => valid!
 */

'use strict';

exports.createValidator = function(numberAsString) {
  var accountNumber = numberAsString;
  var d = [];

  var init = function() {
    checkForString();
    checkLength();

    fillIntoDArray();
  }

  var isCheckSumValid = function() {
    init();
    var checkSum = createCheckSum();
    return checkSum == 0;
  }

  var createCheckSum = function() {
    var checksum = 0;
    for (let i = 1; i <= 9; i++) {
      var dValue = d[i];
      checksum = checksum + i * dValue;
      // console.log("d[" + (i) + "] := " + dValue + "  sum:" + checksum);
    }
    checksum = checksum % 11;
    // console.log("checksum modulo 11: " + checksum);
    return checksum;
  }

  var fillIntoDArray = function() {
    var offset = 9;
    // console.log("fill into D");
    for (let i = 0; i < accountNumber.length; i++) {
      var value = parseInt(accountNumber[i]);
      // console.log("d[" + offset + "]=" + value);
      d[offset--] = value;
    }
  }

  var checkForString = function() {
    if (typeof accountNumber != "string") {
      throw new TypeError("Given account number is not a string.");
    }
  }

  var checkLength = function() {
    if (accountNumber.length < 9) {
      throw new TypeError("Must at least 9 digits.");
    }
    if (accountNumber.length > 9) {
      throw new TypeError("More than 9 digits.");
    }
  }

  var isNumber = function(o) {
    return !isNaN(o - 0) && o !== null && o !== "" && o !== false;
  }

  return {
    init: init,
    isValid: isCheckSumValid,
    checkForString: checkForString,
    getCheckSum: createCheckSum
  }
};
