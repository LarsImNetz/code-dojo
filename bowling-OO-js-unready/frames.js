'use strict';

let Frame = require('./frame.js');

module.exports.create =
function create(gameDefinition) {
    let frames =  {
      getFirstThrow: getFirstThrow,
      getSecondThrow: getSecondThrow
    };

    let frameSet = createFrameSet(gameDefinition);

    function createFrameSet(gameDefinition) {
      let splitedGameDefinition = gameDefinition.split('|');
      return splitedGameDefinition.map(function(singleFrameDefinition) {
        return Frame.create(singleFrameDefinition);
      });
    }

    function get(frameNumber) {
      let frameIndex = frameNumber.index();
      return frameSet[frameIndex];
    }

    function getFirstThrow(frameNumber) {
      let frame = get(frameNumber);
      return frame.firstThrow();
    }
    function getSecondThrow(frameNumber) {
      let frame = get(frameNumber);
      return frame.secondThrow();
    }

    return frames;
};
