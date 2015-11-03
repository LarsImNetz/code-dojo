require('../src/account-number.js');

describe('createAccountNumber', function() {

	describe('.status()', function() {
		it('for valid number returns status "ok"', function() {
			var accountNumber = createAccountNumber('345882865');
			expect(accountNumber.status()).toEqual('ok');
		});

		it('for invalid number returns status "err"', function() {
			var accountNumber = createAccountNumber('345882866');
			expect(accountNumber.status()).toEqual('err');
		});

		it('for illegible number returns status "ill"', function() {
			var accountNumber = createAccountNumber('34?882866');
			expect(accountNumber.status()).toEqual('ill');
		});
	});
});
