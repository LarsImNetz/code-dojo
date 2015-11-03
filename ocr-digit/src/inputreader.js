/*

*/

createInputReader = function(input) {
	var inputString = input;

	var getParsedInput = function() {
		var lineArray = inputString.split('\n');
		return lineArray;
	}

	return {
		getParsedInput: getParsedInput
	}
}
