'use strict';

let Game = require('./game.js');
let Score = require('./score.js');

describe("Game", function() {

  describe("#score", function() {
    var game;

    it("should return score of 90 for 9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||", function() {
      game = Game.create('9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||');

      expect(game.score().points()).toEqual(Score.create(90).points());
    });

    it("should return score of 80 for 8-|8-|8-|8-|8-|8-|8-|8-|8-|8-||", function() {
      game = Game.create('8-|8-|8-|8-|8-|8-|8-|8-|8-|8-||');

      expect(game.score().points()).toEqual(Score.create(80).points());
    });

    it("should return score of 89 for 8-|9-|9-|9-|9-|9-|9-|9-|9-|9-||", function() {
      game = Game.create('8-|9-|9-|9-|9-|9-|9-|9-|9-|9-||');

      expect(game.score().points()).toEqual(Score.create(89).points());
    });

    it("should return score of 60 for 51|51|51|51|51|51|51|51|51|51||", function() {
      game = Game.create('51|51|51|51|51|51|51|51|51|51||');

      expect(game.score().points()).toEqual(Score.create(60).points());
    });

    it("should return score of 150 for 5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", function() {
      game = Game.create('5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5');

      expect(game.score().points()).toEqual(Score.create(150).points());
    });

  });

});
