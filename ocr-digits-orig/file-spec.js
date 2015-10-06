require('./file.js');

describe("accountNumber", function() {
  var numbers[];
  numbers[0] = "    _ ";
  numbers[1] = "  | _|";
  numbers[2] = "  ||_ ";

  var file = createFile(numbers);

  it("has been defined", function() {
    expect(file.getAccountNumber()).toBeDefined();
  });

  it("has 3 lines", function() {
    expect(file.getAccountNumber().length).toEqual(3);
  });

  it("is a array of 9 chars encoded as 1", function() {
    expect(file.getEncodedNumberAt(0).length).toEqual(9);
    expect(file.getEncodedNumberAt(0)).toEqual("     |  |");
  });

  it("is a array of 9 chars encoded as 2", function() {
    expect(file.getEncodedNumberAt(1).length).toEqual(9);
    expect(file.getEncodedNumberAt(1)).toEqual(" _  _||_ ");
  });
  
});
