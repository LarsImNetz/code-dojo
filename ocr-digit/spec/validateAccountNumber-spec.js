'use strict';

var module = require('../src/validateAccountNumber.js');


describe("a spec for validate", function() {
  it("should fire an exception because we use a number", function() {
    var isString = function() {
      var validator = module.createValidator(0);
      validator.isValid();
    }
    expect(isString).toThrowError();
  });

  it("should fire an exception because value is not long enough", function() {
    var isLongEnough = function() {
      var validator = module.createValidator("0");
      var valid = validator.isValid();
    }
    expect(isLongEnough).toThrowError("Must at least 9 digits.");
  });

  it("should fire an exception because value is not long enough 2",
    function() {
      var isNotLongEnough = function() {
        var validator = module.createValidator("00000000");
        var valid = validator.isValid();
      }
      expect(isNotLongEnough).toThrowError("Must at least 9 digits.");
    });

  it("should fire an exception because value is too long", function() {
    var isLonger = function() {
      var validator = module.createValidator("1234567890");
      var valid = validator.isValid();
    }
    expect(isLonger).toThrowError("More than 9 digits.");
  });

  it("should not throw due to the right length", function() {
    var isLongEnough = function() {
      var validator = module.createValidator("000000001");
      var valid = validator.isValid();
    }
    expect(isLongEnough).not.toThrowError();
  });

  // checks the D array
  xit("should check if '000000001' => d1 = 1", function() {
    var validator = module.createValidator("000000001");
    var d1 = validator.getD(1);
    expect(d1).toEqual(1);
  });

  // checks for the checksum
  xit("should check if '000000001' = 1", function() {
    var validator = module.createValidator("000000001");
    var checksum = validator.getCheckSum();
    expect(checksum).toEqual(1);
  });

  // Check some account numbers
  xit("should check validation", function() {
    var validator = module.createValidator("000000000");
    var valid = validator.isValid();
    expect(valid).toBe(true);
  });

});
