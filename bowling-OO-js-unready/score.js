'use strict';

module.exports.create =
function create(value) {
    let score =  {
      points: points
    };
    function points() {
      return value;
    }

    return score;
};
