createAccountNumber = function(number) {
	return {
		number: number,
		status: status
	};

	function status() {
		if (this.number.match(/\d{9}/) === null) return 'ill';
		return checksum(this.number) === 0 ? 'ok' : 'err';
	}

	function checksum(number) {
		// (d1+2*d2+3*d3 +..+9*d9) mod 11 = 0
		var d = number.toString();
		var sum = d[1 - 1] + 2 * d[2 - 1] + 3 * d[3 - 1] + 4 * d[4 - 1] + 5 * d[5 -
			1] + 6 * d[6 - 1] + 7 * d[7 - 1] + 8 * d[8 - 1] + 9 * d[9 - 1];
		return sum % 11;
	}
}
