
require('./inputreader.js');

array = "3 4\n*...\n..*.\n....";

describe("lines", function() {
  it("should return 4 lines", function() {
    expect(lines(array).length).toEqual(4);
  });

  it("should return the input splitted by lines", function() {
    expect(lines(array)[0]).toEqual("3 4");
    expect(lines(array)[1]).toEqual("*...");
    expect(lines(array)[2]).toEqual("..*.");
    expect(lines(array)[3]).toEqual("....");
  });

});

describe("dimension", function() {
  it("should return the dimension of the input", function() {
    expect(dimension("3 4")).toEqual({y:3, x:4});
  });
});

describe("mine", function() {
  it("should return 1 for * and 0 for .", function() {
    expect(mine("*")).toEqual(1);
    expect(mine(".")).toEqual(0);
  });
});

describe("array access", function() {
  it("should be a value [y][x]", function() {
    var x1 = new Array(1, 0, 0, 0);
    var x2 = new Array(0, 1, 0, 0);
    var x3 = new Array(0, 0, 0, 2);
    var y = new Array(x1, x2, x3);
  
    expect(y[1][1]).toEqual(1);
    expect(y[0][0]).toEqual(1);
    expect(y[0][1]).toEqual(0);
    expect(y[2][3]).toEqual(2);
  });
});

describe("array line creation", function() {
  it("should be an array representing the line", function() {
    expect(xline("*..*")).toEqual(new Array(0,1,0,0,1,0));
  });
});

describe("array multiline creation", function() {
  it("should be an array representing the whole field", function() {
    expect(minefield("*.\n.*")).toEqual(
      new Array(
        new Array(0,0,0,0),
        new Array(0,1,0,0),
        new Array(0,0,1,0),
        new Array(0,0,0,0)
      )
    );
  });
});


field = "*..\n*..\n...";

describe("mine number count", function() {
  it("should count the number of mines surrounding a field", function() {
    expect(mineadder(field, 0,0)).toEqual(null);
    expect(mineadder(field, 0,1)).toEqual(2);
    expect(mineadder(field, 0,2)).toEqual(0);
    expect(mineadder(field, 1,0)).toEqual(null);
    expect(mineadder(field, 1,1)).toEqual(2);
    expect(mineadder(field, 1,2)).toEqual(0);
    expect(mineadder(field, 2,0)).toEqual(1);
    expect(mineadder(field, 2,1)).toEqual(1);
    expect(mineadder(field, 2,2)).toEqual(0);
  });
});

describe("result map creation", function() {
  it("should create a map containing the number of surrounding mines per field", function() {
    expect(resultmap(field)).toEqual("*20\n*20\n110\n");
  });
});

main();