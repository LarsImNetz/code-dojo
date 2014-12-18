package org.linuxx.moonserver.codedojo.diamond;

class Indent implements IIndent {
	Indent() {
	}

	@Override
	public String getIndent(final int count) {
		String result = "";
		for (int i = 0; i < faktorisieren(count); i++) {
			result += " ";
		}
		return result;
	}

	public int faktorisieren(final int count) {
		return count;
	}
}
