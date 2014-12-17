package org.linuxx.moonserver.codedojo.diamond;

/**
 * Create a Diamond Printer
 *
 * Wird gefüttert mit 'A'
 * und gibt aus:
 * A
 * 
 * Wird gefüttert mit 'B' und gibt aus:
 *  A
 * B B
 *  A
 *
 * Wird gefüttert mit 'C' und gibt aus:
 *   A
 *  B B
 * C   C
 *  B B
 *   A
 * 
 */
public class App {
	public static void main(String[] args) {
		System.out.println("Diamond Printer!");

		for (char c = 'A'; c <= 'Z'; c++) {
			System.out.println("Diamond for " + c);
			System.out.println(new DiamondPrinter().diamond(c));
			System.out.println();
		}
	}
}
