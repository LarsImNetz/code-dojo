'use strict';
var fileParser = require('../src/file-parser.js');


   var input =           '    _  _     _  _  _  _  _ \n'+
                         '  | _| _||_||_ |_   ||_||_|\n'+
                         '  ||_  _|  | _||_|  ||_| _|\n'+
                         '\n' +
                         '    _  _     _  _  _  _  _ \n'+
                         '  | _| _||_||_ |_   ||_||_|\n'+
                         '  ||_  _|  | _||_|  ||_| _|\n'+
                         '\n';
  
describe("list of accountnumbers", function() {
  it("can read through", function() { 
    expect(typeof fileParser.getParsedInput(input)).toEqual("object");
  });

  it("line number count can be divided by 4", function() {
    var lineNumberCount = fileParser.getParsedInput(input).length;
    expect((lineNumberCount-1) % 4).toEqual(0);
  });

  it("line 4 is empty", function() {
    var line4 = fileParser.getParsedInput(input)[3];
    expect(line4).toEqual("");
  });

  it("", function() {
    var a = fileParser.getNumberArray(0, input);
    expect(a[0]).toEqual("    _  _     _  _  _  _  _ ");
    expect(a[1]).toEqual("  | _| _||_||_ |_   ||_||_|");
    expect(a[2]).toEqual("  ||_  _|  | _||_|  ||_| _|");
  });

  it("input array wird decoded zu string", function() {
    var oneAccountNumber = fileParser.getNumberArray(0, input);
    var number = fileParser.createNumber(oneAccountNumber);
    expect(number).toEqual("123456789");
  });

  it("eine illegale nummer", function() {
   var input =           '    _  _     _  _  _  _  _ \n'+
                         '  | _| _||_||_ |_   ||_||_|\n'+
                         '  ||_  _| _| _||_|  ||_| _|\n'+
                         '\n';

    var oneAccountNumber = fileParser.getNumberArray(0, input);
    var number = fileParser.createNumber(oneAccountNumber);
    expect(number).toEqual("123?56789 ILL");
  });

});
