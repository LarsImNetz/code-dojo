'use strict';

var file = require('./file.js');
var decoder = require('./decoder.js');
var validator = require('./validateAccountNumber.js');

(function() {

	var getParsedInput = function(inputString) {
		var lineArray = inputString.split('\n');
		return lineArray;
	}

	var getNumberArray = function(index, inputString) {
		var accountNumber = [];
		var lineArray = getParsedInput(inputString);
		accountNumber[0] = lineArray[4 * index];
		accountNumber[1] = lineArray[4 * index + 1];
		accountNumber[2] = lineArray[4 * index + 2];
		return accountNumber;
	}

	var createNumber = function(number) {
		var fileModel = file.createFile(number);
		var decoderModel = decoder.createDecoder();


		var value = "";
		for (var i = 0; i < 9; i++) {
			value = value + decoderModel.decode(fileModel.getEncodedNumberAt(i));
		}
		if (value.indexOf("?") != -1) {
			value += " ILL";
		} else {
			var validatorModel = validator.createValidator(value);
			if (!validatorModel.isValid()) {
				value += " ERR";
			}
		}
		return value;
	}


	var result = function(input) {
		var resultFile = "";
		var count = (getParsedInput(input).length - 1) / 4;
		for (var i = 0; i < count; i++) {
			var number = getNumberArray(i, input);
			var value = createNumber(number);
			resultFile = resultFile + value + '\n';
		}
		// Diese Datei ist von Klass falsch erstellt worden
		//     var resultFile =
		//       '677?61127 ILL\n' +
		//       '7090842?3 ILL\n' +
		//       '825328851 ERR\n' +
		//       '667491494 ERR\n' +
		//       '899916355 ERR\n' +
		//       '422889896 ERR\n' +
		//       '811492798\n' +
		//       '118345602 ERR\n' +
		//       '540447259 ERR\n' +
		//       '306614921 ERR\n' +
		//       '204970435 ERR\n' +
		//       '696730525\n' +
		//       '905154556\n' +
		//       '876218696\n' +
		//       '317261251\n' +
		//       '390146124\n' +
		//       '110425529\n' +
		//       '946285056\n' +
		//       '576598827\n' +
		//       '11527?511 ILL\n';
		//



		return resultFile;
	}

	module.exports = {
		getParsedInput: getParsedInput,
		getNumberArray: getNumberArray,
		createNumber: createNumber,
		result: result
	};

})();
