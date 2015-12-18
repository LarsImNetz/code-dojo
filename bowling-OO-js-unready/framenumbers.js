'use strict';

let FrameNumber = require('./framenumber.js');

const FRAME_NUMBERS = createFrameNumbers();

module.exports.forEach =
function forEach(callback) {
  FRAME_NUMBERS.forEach(callback);
};

function createFrameNumbers() {
  let frameNumbers = [];
  for (let frameNumber = 1; frameNumber <= 10; frameNumber++) {
    let number = FrameNumber.create(frameNumber);
    frameNumbers.push(number);
  }

  return frameNumbers;
}
