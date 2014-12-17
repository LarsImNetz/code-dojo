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

		String actual = printer.diamond('A');
		String expected = "A";

		Assert.assertEquals(expected, actual);
	}

	@Test(expected = IllegalArgumentException.class)
	public void testDiamondq() {
		printer.diamond('q');
	}

	@Test
	public void test_printB() {

		String actual = printer.diamond('B');
		String expected = " A\nB B\n A\n";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_lineA() {

		String actual = printer.line('A');
		String expected = "A";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_lineB() {

		String actual = printer.line('B');
		String expected = "B B";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_lineD() {

		String actual = printer.line('D');
		String expected = "D     D";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_outerIndentB() {

		String actual = printer.outerIndent('B');
		String expected = " ";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_innerIndentB() {

		String actual = printer.innerIndent('B');
		String expected = " ";

		Assert.assertEquals(expected, actual);
	}

	@Test
	public void test_innerIndentD() {

		String actual = printer.innerIndent('D');
		String expected = "     ";

		Assert.assertEquals(expected, actual);
	}
}
