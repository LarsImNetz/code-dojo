
require('../digit.js');

describe("answer", function() {

  it("sollte sein, dass die 9 ._. ausgibt", function() {
    expect(digitLine1("9")).toEqual("._.");
  });

  it("sollte sein, dass die 1 ... ausgibt", function() {
    expect(digitLine1("1")).toEqual("...");
  });

  it("sollte sein, dass die 1 ..| ausgibt", function() {
    expect(digitLine2("1")).toEqual("..|");
  });

  it("sollte sein, dass die 2 ..| ausgibt", function() {
    expect(digit("2")).toEqual("._. #._| #|_. ");
  });

  it("sollte sein, dass die 23 ..| ausgibt", function() {
    expect(digit("23")).toEqual("._. ._. #._| ._| #|_. ._| ");
  });

  it("sollte sein, dass die 910 ..| ausgibt", function() {
    expect(digit("910")).toEqual("._. ... ._. #|_| ..| |.| #..| ..| |_| ");
  });

  it("sollte sein, dass die 910 lesbar ausgegeben wird", function() {
    console.log(digitClean("910"));
  });
});


describe("inner tests", function() {

  it("sollte sein, dass wir nur Zahlen akzeptieren", function() {
    expect(function() {check("abc"); }).toThrow(new Error("Parsing is not possible"));
  });
});

