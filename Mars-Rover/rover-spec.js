'use strict';
?
let makeRover = require('./rover.js');
?
describe("makeRover", function() {
  it("should return a rover", function() {
    let rover = makeRover();
    expect(rover).toBeDefined();
  });
?
 it("should init a rover", function() {
    let rover = makeRover(1,2,"N");
    expect(rover.getPosition()).toEqual({x:1, y:2, orientation: "N"});
  });
?
  describe("move()", function() {
?
    it("should move a rover forward north", function() { 
      let rover = makeRover(0,0,"N");
      expect(rover.move("M").getPosition()).toEqual({x:0, y:1, orientation: "N"});
    });
?
    it("should move a rover forward south", function() { 
      let rover = makeRover(0,0,"S");
      expect(rover.move("M").getPosition()).toEqual({x:0, y:-1, orientation: "S"});
    });
?
    it("should move a rover forward west", function() { 
      let rover = makeRover(0,0,"W");
      expect(rover.move("M").getPosition()).toEqual({x:-1, y:0, orientation: "W"});
    });
?
    it("should move a rover forward east", function() { 
      let rover = makeRover(0,0,"E");
      expect(rover.move("M").getPosition()).toEqual({x:1, y:0, orientation: "E"});
    });
?
    it("should turn counter-clockwise", function() {
      let rover = makeRover(0,0,"N");
      expect(rover.move("L").getPosition()).toEqual({x:0, y:0, orientation: "W"});
      expect(rover.move("L").getPosition()).toEqual({x:0, y:0, orientation: "S"});
      expect(rover.move("L").getPosition()).toEqual({x:0, y:0, orientation: "E"});
      expect(rover.move("L").getPosition()).toEqual({x:0, y:0, orientation: "N"});
    });
?
    it("should turn clockwise", function() {
      let rover = makeRover(0,0,"N");
      expect(rover.move("R").getPosition()).toEqual({x:0, y:0, orientation: "E"});
      expect(rover.move("R").getPosition()).toEqual({x:0, y:0, orientation: "S"});
      expect(rover.move("R").getPosition()).toEqual({x:0, y:0, orientation: "W"});
      expect(rover.move("R").getPosition()).toEqual({x:0, y:0, orientation: "N"});
    });
?
  });
?
  describe("moveSequence", function() {
    it("spirit and opportunity FTW", function() {
      let spirit= makeRover(3,3,"E");
      expect(spirit.move("MMRMMRMRRM").getPosition()).toEqual({x:5, y:1, orientation: "E"});
      let opportunity = makeRover(1,2,"N");
      expect(opportunity.move("LMLMLMLMM").getPosition()).toEqual({x:1, y:3, orientation: "N"});
    });
  });
?
});
