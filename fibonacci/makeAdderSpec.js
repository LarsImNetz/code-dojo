describe("makeAdder()", function() {
    it("should make an add5 function", function() {
      var add5 = makeAdder(5);
      expect(typeof add5).toEqual("function");
      expect(add5(3)).toEqual(8);
    });

    it("should make an add2 function", function() {
      var add2 = makeAdder(2);
      expect(typeof add2).toEqual("function");
      expect(add2(3)).toEqual(5);
    });
  });