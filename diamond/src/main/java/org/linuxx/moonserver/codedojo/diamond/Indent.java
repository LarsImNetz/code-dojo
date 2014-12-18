package org.linuxx.moonserver.codedojo.diamond;

class Indent implements IIndent {
	Indent() {
	}

	@Override
	public String getIndent(final int count) {
		final StringBuilder result = new StringBuilder();
		for (int i = 0; i < faktorisieren(count); i++) {
			result.append(" ");
		}
		return result.toString();
	}

	public int faktorisieren(final int count) {
		return count;
	}
}
