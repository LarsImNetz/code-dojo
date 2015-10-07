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

  // checks for the checksum
  it("should check if '000000001' = 1", function() {
    var validator = module.createValidator("000000001");
    validator.init();
    var checksum = validator.getCheckSum();
    expect(checksum).toEqual(1);
  });

  it("should check if '000000010' = 2", function() {
    var validator = module.createValidator("000000010");
    validator.init();
    var checksum = validator.getCheckSum();
    expect(checksum).toEqual(2);
  });

  it("should check if '000000200' = 6", function() {
    var validator = module.createValidator("000000200");
    validator.init();
    var checksum = validator.getCheckSum();
    expect(checksum).toEqual(6);
  });

  it("should check if '000002000' = 8", function() {
    var validator = module.createValidator("000002000");
    validator.init();
    var checksum = validator.getCheckSum();
    expect(checksum).toEqual(8);
  });

  it("should check if '000010000' = 5", function() {
    var validator = module.createValidator("000010000");
    validator.init();
    var checksum = validator.getCheckSum();
    expect(checksum).toEqual(5);
  });

  it("should check if '000100000' = 6", function() {
    var validator = module.createValidator("000100000");
    validator.init();
    var checksum = validator.getCheckSum();
    expect(checksum).toEqual(6);
  });

  it("should check if '001000000' = 7", function() {
    var validator = module.createValidator("001000000");
    validator.init();
    var checksum = validator.getCheckSum();
    expect(checksum).toEqual(7);
  });

  it("should check if '010000000' = 8", function() {
    var validator = module.createValidator("010000000");
    validator.init();
    var checksum = validator.getCheckSum();
    expect(checksum).toEqual(8);
  });

  it("should check if '100000000' = 9", function() {
    var validator = module.createValidator("100000000");
    validator.init();
    var checksum = validator.getCheckSum();
    expect(checksum).toEqual(9);
  });

  it("should check if '000001111' = 10", function() {
    var validator = module.createValidator("000001111");
    validator.init();
    var checksum = validator.getCheckSum();
    expect(checksum).toEqual(10);
  });

  it("should check if '123456789' is valid", function() {
    var validator = module.createValidator("123456789");
    var valid = validator.isValid();
    expect(valid).toBe(true);
  });

  // Check some account numbers
  it("should check validation", function() {
    var validator = module.createValidator("000000000");
    var valid = validator.isValid();
    expect(valid).toBe(true);
  });

});
