describe("safeCounter", function() {

  var safeCounter;

  beforeEach(function() {
    safeCounter = getSafeCounter();
  });

  describe("getValue()", function() {
    it("should return the value of the counter", function() {
      expect(safeCounter.getValue()).toEqual(0);
    });
  });

  describe("increment()", function() {
    it("should increment the value of the counter by 1", function() {
      expect(safeCounter.increment()).toEqual(1);
      expect(safeCounter.getValue()).toEqual(1);
      expect(safeCounter.increment()).toEqual(2);
      expect(safeCounter.getValue()).toEqual(2);
    });
  });

    it("should have only two properties", function() {
      expect(Object.getOwnPropertyNames(safeCounter).length).toEqual(2);
      expect(safeCounter.hasOwnProperty("getValue")).toBe(true);
      expect(safeCounter.hasOwnProperty("increment")).toBe(true);
      expect(Object.getPrototypeOf(safeCounter)).toBe(Object.prototype);
    });

});