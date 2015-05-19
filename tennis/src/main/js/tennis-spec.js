
require('./tennis.js');

describe("game", function() {

  describe("scoring",function(){
    var game;

    beforeEach(function() {
      game = new Game();
    });

    it("start", function() {      
      var spielstand = game.getSpielstand();
      expect(spielstand.Becker).toEqual(0);
      expect(spielstand.Agassi).toEqual(0);
    });

   it("punkt becker", function() {
      game.point("Becker");
      var spielstand = game.getSpielstand();
      expect(spielstand.Becker).toEqual(1);
      expect(spielstand.Agassi).toEqual(0);
    });

   it("punkt agassi", function() {
      game.point("Agassi");
      var spielstand = game.getSpielstand();
      expect(spielstand.Becker).toEqual(0);
      expect(spielstand.Agassi).toEqual(1);
    });

   it("spiel 4:0 agassi gewinnt", function() {
      game.point("Agassi");
      game.point("Agassi");
      game.point("Agassi");
      game.point("Agassi");
      var spiel = game.isClosed();
      expect(spiel).toEqual(true);
    });
    
  it("spiel 3:1 nicht beendet", function() {
      game.point("Agassi");
      game.point("Agassi");
      game.point("Agassi");
      game.point("Becker");
      var spiel = game.isClosed();
      expect(spiel).toEqual(false);
    });

  it("spiel 4:3 nicht beendet", function() {
      game.point("Agassi");
      game.point("Agassi");
      game.point("Agassi");
      game.point("Agassi"); // 4
      game.point("Becker");
      game.point("Becker");
      game.point("Becker"); // 3
      var spiel = game.isClosed();
      expect(spiel).toEqual(false);
    });

   it("spiel 7:5 agassi gewinnt", function() {
      game.point("Agassi");
      game.point("Agassi");
      game.point("Agassi");
      game.point("Agassi");
      game.point("Agassi");
      game.point("Agassi");
      game.point("Agassi"); // 7
      game.point("Becker");
      game.point("Becker");
      game.point("Becker");
      game.point("Becker");
      game.point("Becker"); // 5
      var spiel = game.isClosed();
      expect(spiel).toEqual(true);
    });
  });  

  describe("Beschreibung",function(){
    var game;

    beforeEach(function() {
      game = new Game();
    });

   it("spielstand fifteen", function() {
     expect(game.getSingleDescription(1)).toEqual("fifteen");
   });

  it("spielstand thirty", function() {
     expect(game.getSingleDescription(2)).toEqual("thirty");
   });

   it("fifteen love", function() {
     game.spielstand.Becker = 1
      var spielstand = game.getSpielstand();
      expect(spielstand.Becker).toEqual(1);
     expect(game.getDescription()).toEqual("fifteen love");
   });

  it("fifteen thirty", function() {
     game.spielstand.Becker = 1
     game.spielstand.Agassi = 2
     expect(game.getDescription()).toEqual("fifteen thirty");
   });

  it("fifteen all", function() {
     game.spielstand.Becker = 1
     game.spielstand.Agassi = 1
     expect(game.getDescription()).toEqual("fifteen all");
   });

   it("thirty all", function() {
     game.spielstand.Becker = 2
     game.spielstand.Agassi = 2
     expect(game.getDescription()).toEqual("thirty all");
   });

   it("deuce", function() {
     game.spielstand.Becker = 3
     game.spielstand.Agassi = 3
     expect(game.getDescription()).toEqual("deuce");
   });

  it("advantage #1", function() {
     game.spielstand.Becker = 4
     game.spielstand.Agassi = 3
     expect(game.getDescription()).toEqual("advantage #1");
   });

 it("advantage #2", function() {
     game.spielstand.Becker = 4
     game.spielstand.Agassi = 5
     expect(game.getDescription()).toEqual("advantage #2");
   });
  
  });
});