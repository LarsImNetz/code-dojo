'use strict';

module.exports.create =
function create(frameNumber) {
    let number =  {
      index: index
    };
    function index() {
      return frameNumber - 1;
    }

    return number;
};
