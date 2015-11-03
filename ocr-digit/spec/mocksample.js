'use strict';

describe("reads Entries", function() {
	var splitModule, reader;

	beforeEach(function() {
		splitModule = require('./splitModule.js');

		spyOn(splitModule, "split").and.callFake(function(line) {
			// was wir liefern wollen
			return splitLines[line];
		});
	});

	beforeEach(function() {
		reader = require('./entryReader.js');
	});

	it("read eight eight", function() {
		var entry = reader.readEntry("lineTop", "lineMiddle", "lineBottom");

		expect(splitModule.split).toHaveBeenCalledWith("lineTop");
		expect(splitModule.split).toHaveBeenCalledWith("lineMiddle");
		expect(splitModule.split).toHaveBeenCalledWith("lineBottom");
	});

});
