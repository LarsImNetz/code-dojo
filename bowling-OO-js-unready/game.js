'use strict';

let Frames = require('./frames.js');
let FrameNumbers = require('./framenumbers.js');
let Score = require('./score.js');

module.exports.create =
function create(gameDefinition) {
    let game =  {
      score: score,
      frames: Frames.create(gameDefinition)
    };

    function score() {
      var pointValue = 0;
      let thisGame = this;
      FrameNumbers.forEach(function(frameNumber) {
        let currentFrame = thisGame.frames;
        pointValue += currentFrame.getFirstThrow(frameNumber);
        pointValue += currentFrame.getSecondThrow(frameNumber);
      });

      return Score.create(pointValue);
    }

    return game;
};
