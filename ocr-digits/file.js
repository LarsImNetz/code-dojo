createFile = function() {
  var accountNumber = [];
    accountNumber[0] = '    _  _     _  _  _  _  _ ';
    accountNumber[1] = '  | _| _||_||_ |_   ||_||_|';
    accountNumber[2] = '  ||_  _|  | _||_|  ||_| _|';

  var getAccountNumber = function() {
    return accountNumber;
  }

  var getEncodedNumberAt = function(index) {
    var value = "";
    for (i=0; i<3; i++) {
      var line = accountNumber[i];
       value = value + line.substr(3*index,3);
    }
    return value;
  }

 
  return {
    getAccountNumber: getAccountNumber,
    getEncodedNumberAt: getEncodedNumberAt

  }
}
