package org.linuxx.moonserver.codedojo.diamond;

import com.google.common.base.Preconditions;

public class DiamondPrinter {
	public DiamondPrinter() {
	}

	public String diamond(final char letter) {
		Preconditions.checkArgument(letter >= 'A' && letter <= 'Z');

		if (letter == 'A') {
			return "A";
		}

		final StringBuilder result = new StringBuilder();

		char down = letter;
		for (char c = 'A'; c < letter; c++) {
			result.append(outerIndent(down)).append(line(c)).append("\n");
			down--;
		}
		char up = 'A';
		for (char c = letter; c >= 'A'; c--) {
			result.append(outerIndent(up)).append(line(c)).append("\n");
			up++;
		}

		return result.toString();
	}

	String outerIndent(final char letter) {
		Preconditions.checkArgument(letter >= 'A' && letter <= 'Z');

		final int count = letter - 'A';
		final String result = new Indent().getIndent(count);
		return result;
	}

	String innerIndent(final char letter) {
		Preconditions.checkArgument(letter >= 'A' && letter <= 'Z');

		final int count = letter - 'A';
		final String result = new InnerIndent().getIndent(count);
		return result;
	}

	String line(final char letter) {
		Preconditions.checkArgument(letter >= 'A' && letter <= 'Z');

		if (letter == 'A') {
			return "A";
		}
		return letter + innerIndent(letter) + letter;
	}
}
