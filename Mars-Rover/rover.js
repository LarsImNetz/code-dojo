'use strict';
?
module.exports = function(x,y,orientation) {
  var 
    position = {
      x: x, 
      y: y, 
      orientation: orientation
    },
    rover = {
      getPosition: getPosition,
      move: move
    };
?
  function getPosition() {
    return position;
  }
?
  function step(command) {
    switch (command) {
      case "M":
        moveForward();
        break;
      case "L":
        turn("NWSEN");
        break;
      case "R":
        turn("NESWN");
        break;
    }
    return rover;
  }
?
  function move(commandSequence) {
    commandSequence.split("").forEach(step);
    return rover;
  }
?
  function turn(orientationSequence ) {
    let idx = orientationSequence.indexOf(position.orientation);
    position.orientation = orientationSequence[idx + 1];
  }
?
  function moveForward() {
    switch(position.orientation) {
      case 'N':
        position.y += 1;
        break;
?
      case 'S':
        position.y -= 1;
        break;
?
      case 'W':
        position.x -= 1;
        break;
?
      case 'E':
        position.x += 1;
        break;
    }
  }
?
  return rover;
};