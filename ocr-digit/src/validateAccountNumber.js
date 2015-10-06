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

  var checkIfValid = function() {
    if (isNumber(accountNumber)) {
      throw new TypeError("Ist kein String");
    }
    return 0;
  }

  var isNumber = function(o) {
    return !isNaN(o - 0) && o !== null && o !== "" && o !== false;
  }

  return {
    isValid: checkIfValid
  }
};
