createDecoder = function() {

  var decode = function(encodedNumber) {
    switch (encodedNumber) {
      case '   ' +
           '  |' +
           '  |' :
        return '1'; 
      case ' _ ' +
           ' _|' +
           '|_ ' :
        return '2';       
      case ' _ ' +
           ' _|' +
           ' _|' :
        return '3';       
      case '   ' +
           '|_|' +
           '  |' :
        return '4';       
      case ' _ ' +
           '|_ ' +
           ' _|' :
        return '5';       
      case ' _ ' +
           '|_ ' +
           '|_|' :
        return '6';       
      case ' _ ' +
           '  |' +
           '  |' :
        return '7';       
      case ' _ ' +
           '|_|' +
           '|_|' :
        return '8';       
      case ' _ ' +
           '|_|' +
           ' _|' :
        return '9';       
      case ' _ ' +
           '| |' +
           '|_|' :
        return '0';
      default : return '?';
   
    }
  }

  return {
    decode: decode
  }
}