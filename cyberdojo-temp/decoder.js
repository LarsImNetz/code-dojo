createDecoder = function() {

  /**
  * returns a number
  */
  var decode = function(encodedNumber) {
    var value;
    switch (encodedNumber) {
      case '   ' +
           '  |' +
           '  |' :
           value = 1;
           break;
      case ' _ ' +
           ' _|' +
           '|_ ' :
           value = 2;
           break;
      case ' _ ' +
           ' _|' +
           ' _|' :
           value = 3;
           break;
      case '   ' +
           '|_|' +
           '  |' :
           value = 4;
           break;
      case ' _ ' +
           '|_ ' +
           ' _|' :
           value = 5;
           break;
      case ' _ ' +
           '|_ ' +
           '|_|' :
           value = 6;
           break;
      case ' _ ' +
           '  |' +
           '  |' :
           value = 7;
           break;
      case ' _ ' +
           '|_|' +
           '|_|' :
           value = 8;
           break;
      case ' _ ' +
           '|_|' +
           ' _|' :
           value = 9;
           break;
      case ' _ ' +
           '| |' +
           '|_|' :
           value = 0;
           break;
      default :
        value = -1;
    }
    return value;
  }

  return {
    decode: decode
  }
}
