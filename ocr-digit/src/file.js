/**
 * Wir erwarten ein 3wertiges Array welches Strings enthält, die wir scannen können
 *
 * numbers[0] = "   ";
 * numbers[1] = "|_|";
 * numbers[2] = "  |";
 *
 */
'use strict';

exports.createFile = function(numbers) {
	var accountNumber = numbers;

	var getAccountNumber = function() {
		return accountNumber;
	}

	var getEncodedNumberAt = function(index) {
		var value = "";

		for (let i = 0; i < 3; i++) {
			var line = accountNumber[i];
			value = value + line.substr(3 * index, 3);
		}
		return value;
	}

	return {
		getAccountNumber: getAccountNumber,
		getEncodedNumberAt: getEncodedNumberAt

	}
}
