package org.linuxx.moonserver.codedojo.diamond;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class TestDiamondPrinter {

	private DiamondPrinter printer;

	@Before
	public void setUp() {
		printer = new DiamondPrinter();
	}

	@Test
	public void test_printA() {

		final String actual = printer.diamond('A');
		final String expected = "A";

		Assert.assertEquals(expected, actual);
	}

	@Test(expected = IllegalArgumentException.class)
	public void testDiamondq() {
		printer.diamond('q');
	}

	@Test
	public void test_printB() {

		final String actual = printer.diamond('B');
		final String expected = " A\nB B\n A\n";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_lineA() {

		final String actual = printer.line('A');
		final String expected = "A";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_lineB() {

		final String actual = printer.line('B');
		final String expected = "B B";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_lineD() {

		final String actual = printer.line('D');
		final String expected = "D     D";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_outerIndentA() {

		final String actual = printer.outerIndent('A');
		final String expected = "";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_outerIndentB() {

		final String actual = printer.outerIndent('B');
		final String expected = " ";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_outerIndentC() {

		final String actual = printer.outerIndent('C');
		final String expected = "  ";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_innerIndentB() {

		final String actual = printer.innerIndent('B');
		final String expected = " ";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_innerIndentD() {

		final String actual = printer.innerIndent('D');
		final String expected = "     ";

		Assert.assertEquals(expected, actual);
	}
}
