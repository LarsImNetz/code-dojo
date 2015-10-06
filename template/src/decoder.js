'use strict';

exports.createDecoder = function() {

  /**
  * returns a number
  */
  var decode = function() {
	return 42;
  }

  return {
    decode: decode
  }
};
