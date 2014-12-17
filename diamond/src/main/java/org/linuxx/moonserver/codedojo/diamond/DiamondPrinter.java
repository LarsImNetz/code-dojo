package org.linuxx.moonserver.codedojo.diamond;

import com.google.common.base.Preconditions;

public class DiamondPrinter {
	public DiamondPrinter() {}
	
	public String diamond(char letter) {
		Preconditions.checkArgument(letter >= 'A' && letter <= 'Z');

		if (letter == 'A') {
			return "A";
		}
		
		StringBuilder result = new StringBuilder();

		char down = letter;
		for (char c = 'A'; c < letter; c++) {
			result.append(outerIndent(down)).append(line(c)).append("\n");
			down --;
		}
		char up = 'A';
		for (char c = letter; c >= 'A'; c--) {
			result.append(outerIndent(up)).append(line(c)).append("\n");
			up++;
		}
		
		return result.toString();
	}

	public String outerIndent(char letter) {
		Preconditions.checkArgument(letter >= 'A' && letter <= 'Z');

		String result = "";
		for (char c = letter; c >= 'B'; c--) {
			result += " ";
		}
		return result;
	}

	public String innerIndent(char letter) {
		Preconditions.checkArgument(letter >= 'A' && letter <= 'Z');

		String result = " ";
		for (char c = letter; c >= 'C'; c--) {
			result += "  ";
		}
		return result;
	}

	public String line(char letter) {
		Preconditions.checkArgument(letter >= 'A' && letter <= 'Z');

		if (letter == 'A') {
			return "A";
		}
		return letter + innerIndent(letter) + letter;
	}
}
