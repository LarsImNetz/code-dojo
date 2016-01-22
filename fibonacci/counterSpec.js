describe("counter", function() {

  var counter;

  beforeEach(function() {
    counter = getCounter();
  });

  describe("value", function() {
    it("should hold the current value of the counter", function() {
      expect(counter.value).toEqual(0);
      counter.value = 3;
      expect(counter.value).toEqual(3);
      counter.value = "oops";
      expect(counter.value).toEqual("oops");
      expect(counter.increment()).toEqual(NaN);
    });
  });

  describe("value()", function() {
    it("should return the value of the counter", function() {
      expect(counter.getValue()).toEqual(0);
    });
  });

  describe("increment()", function() {
    it("should increment the value of the counter by 1", function() {
      expect(counter.increment()).toEqual(1);
      expect(counter.getValue()).toEqual(1);
      expect(counter.increment()).toEqual(2);
      expect(counter.getValue()).toEqual(2);
    });
  });

    it("should have only three properties", function() {
      expect(Object.getOwnPropertyNames(counter).length).toEqual(3);
      expect(counter.hasOwnProperty("value")).toBe(true);
      expect(counter.hasOwnProperty("getValue")).toBe(true);
      expect(counter.hasOwnProperty("increment")).toBe(true);
      expect(Object.getPrototypeOf(counter)).toBe(Object.prototype);
    });

});