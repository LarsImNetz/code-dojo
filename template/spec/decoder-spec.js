var decode = require('../src/decoder.js');

'use strict';

var decoder = decode.createDecoder();

describe("decoder sample", function() {

    it("should return a simple value", function() {
      expect(decoder.decode()).toEqual(42);
    });
});
