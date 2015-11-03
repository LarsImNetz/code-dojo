require("../src/inputreader.js");

describe("list of accountnumbers", function() {
	it("can read through", function() {

		var input = 'abc\n' +
			'    _  _     _  _  _  _  _ \n' +
			'  | _| _||_||_ |_   ||_||_|\n' +
			'  ||_  _|  | _||_|  ||_| _|\n' +
			'\n' +
			'    _  _     _  _  _  _  _ \n' +
			'  | _| _||_||_ |_   ||_||_|\n' +
			'  ||_  _|  | _||_|  ||_| _|\n' +
			'\n';

		var inputreader = createInputReader(input);
		expect(typeof inputreader.getParsedInput()).toEqual(
			"object");
	});
});
