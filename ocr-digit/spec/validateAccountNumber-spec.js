'use strict';

var module = require('../src/validateAccountNumber.js');


describe("a spec for validate", function() {
  it("should be a string", function() {
    var isString = function() {
      var validator = module.createValidator(0);
      validator.isValid();
    }
    expect(isString).toThrowError();
  });

  xit("should be 0 at result", function() {
    var validator = module.createValidator("0");
    var valid = validator.isValid();
    expect(valid).toEqual(0);
  });
});
