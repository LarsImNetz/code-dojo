require('./file.js');
require('./decoder.js');


describe("decoder", function() {
  var file = createFile();
 
  var decoder = createDecoder();

  it("encodedNumber 1 converts to 1", function() {
    var encodedNumber = file.getEncodedNumberAt(0);
    expect(decoder.decode(encodedNumber)).toEqual('1');
  });

  it("encodedNumber 2 converts to 2", function() {
    var encodedNumber = file.getEncodedNumberAt(1);
    expect(decoder.decode(encodedNumber)).toEqual('2');
  });

  it("encodedNumber 'schnubbel' converts to ?", function() {
    var encodedNumber = "schnubbel";
    expect(decoder.decode(encodedNumber)).toEqual('?');
  });

  it("decodes the whole array to 123456789", function() {
    var value = "";
    for (var i = 0;i<9;i++) {
      value = value + decoder.decode(file.getEncodedNumberAt(i));
    }       
   expect(value).toEqual("123456789");
  });

});