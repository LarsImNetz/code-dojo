'use strict';

module.exports.create =
function create(singleFrameDefinition) {
    let frame =  {
      firstThrow: firstThrow,
      secondThrow: secondThrow
    };
    function firstThrow() {
      return parseScore(singleFrameDefinition[0]);
    }
    function secondThrow() {
      return parseScore(singleFrameDefinition[1]);
    }
    return frame;

    function parseScore(value) {
      if (value === '-') {
        return 0;
      }
      return parseInt(value);
    }
};
