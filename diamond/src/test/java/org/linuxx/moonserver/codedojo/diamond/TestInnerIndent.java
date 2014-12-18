package org.linuxx.moonserver.codedojo.diamond;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class TestInnerIndent {

	private InnerIndent indent;

	@Before
	public void setUp() {
		indent = new InnerIndent();
	}

	@Test
	public void testIdent_0() {
		final String expected = "";
		final String actual = indent.getIndent(0);
		Assert.assertEquals(expected, actual);
	}

	@Test
	public void testIdent_1() {
		final String expected = " ";
		final String actual = indent.getIndent(1);
		Assert.assertEquals(expected, actual);
	}

	@Test
	public void testIdent_2() {
		final String expected = "   ";
		final String actual = indent.getIndent(2);
		Assert.assertEquals(expected, actual);
	}

	@Test
	public void testIdent_negativ() {
		final String expected = "";
		final String actual = indent.getIndent(-1);
		Assert.assertEquals(expected, actual);
	}

}
