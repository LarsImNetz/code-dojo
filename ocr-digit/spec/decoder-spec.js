var filer = require('../src/file.js');
var decode = require('../src/decoder.js');

'use strict';

var decoder = decode.createDecoder();

describe("decoder with single number", function() {
  var accountNumbers = [];
  accountNumbers[0] = '   ';
  accountNumbers[1] = '  |';
  accountNumbers[2] = '  |';

  var file = filer.createFile(accountNumbers);

  it("encodedNumber 1 converts to 1", function() {
    var encodedNumber = file.getEncodedNumberAt(0);
    expect(decoder.decode(encodedNumber)).toEqual('1');
  });
});

describe("decoder", function() {
  var accountNumbers = [];
  accountNumbers[0] = '    _  _ ';
  accountNumbers[1] = '  | _| _|';
  accountNumbers[2] = '  ||_  _|';

  var file = filer.createFile(accountNumbers);

  it("encodedNumber 1 converts to 1", function() {
    var encodedNumber = file.getEncodedNumberAt(0);
    expect(decoder.decode(encodedNumber)).toEqual('1');
  });

  it("encodedNumber 2 converts to 2", function() {
    var encodedNumber = file.getEncodedNumberAt(1);
    expect(decoder.decode(encodedNumber)).toEqual('2');
  });

  it("encodedNumber 3 converts to 3", function() {
    var encodedNumber = file.getEncodedNumberAt(2);
    expect(decoder.decode(encodedNumber)).toEqual('3');
  });

  it("encodedNumber 'schnubbel' converts to ?", function() {
      var encodedNumber = "schnubbel";
      expect(decoder.decode(encodedNumber)).toEqual('?');
  });
});


describe("not really decoder", function() {

  var accountNumbers = [];
  accountNumbers[0] = '    _  _     _  _  _  _  _ ';
  accountNumbers[1] = '  | _| _||_||_ |_   ||_||_|';
  accountNumbers[2] = '  ||_  _|  | _||_|  ||_| _|';

  var file = filer.createFile(accountNumbers);


  it("decodes the whole array to 123456789", function() {
    var value = "";
    for (var i = 0; i < 9; i++) {
      value = value + decoder.decode(file.getEncodedNumberAt(i));
    }
    expect(value).toEqual("123456789");
  });

});
