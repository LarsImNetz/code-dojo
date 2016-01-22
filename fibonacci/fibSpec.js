describe("fib", function() {
  
  describe("calculate()", function() {
    it("should calculate the fibonacci sequence", function() {
      expect(fib.calculate(0)).toEqual(0);
      expect(fib.calculate(1)).toEqual(1);
      expect(fib.calculate(2)).toEqual(1);
      expect(fib.calculate(3)).toEqual(2);
      expect(fib.calculate(4)).toEqual(3);
    });
    it("should calculate the 30th fibonacci number in less than 30 ms", function() {
      var start = performance.now();
      expect(fib.calculate(30)).toEqual(832040);
      var end = performance.now();
      var time = end - start;
      expect(time < 30).toBe(true);
      console.log("Calculation fib.calculate(30) took " + time + " ms");
    });
  });

  describe("calculateFast()", function() {
    it("should calculate the fibonacci sequence", function() {
      expect(fib.calculateFast(0)).toEqual(0);
      expect(fib.calculateFast(1)).toEqual(1);
      expect(fib.calculateFast(2)).toEqual(1);
      expect(fib.calculateFast(3)).toEqual(2);
      expect(fib.calculateFast(4)).toEqual(3);
    });
    it("should calculate the 30th fibonacci number in less than 1 ms", function() {
      var start = performance.now();
      expect(fib.calculateFast(50)).toEqual(12586269025);
      var end = performance.now();
      var time = end - start;
      expect(time < 1).toBe(true);
      console.log("Calculation fib.calculateFast(50) took " + time + " ms");
    });
  });
  
});