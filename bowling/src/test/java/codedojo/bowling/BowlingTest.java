package codedojo.bowling;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import codedojo.bowling.Bowling;
import codedojo.bowling.Turn;

public class BowlingTest {

	Bowling bowling;

	@Before
	public void setUp() {
		bowling = new Bowling();
	}

	@Test
	public void testCalculate_KeineSonderfaelle_NurEineRunde() {
		Turn turn = Turn.create(2, 3);
		bowling.add(turn);
		int score = bowling.calculate();

		Assert.assertEquals(5, score);
	}

	@Test
	public void testCalculate_Strike_NurEineRunde() {
		Turn turn = Turn.create(10, 0);
		bowling.add(turn);
		int score = bowling.calculate();

		Assert.assertEquals(10, score);
	}

	@Test
	public void testCalculate_KeineSonderfaelle_DreiRunden() {
		bowling.add(Turn.create(2, 3));
		bowling.add(Turn.create(3, 3));
		bowling.add(Turn.create(2, 3));

		int score = bowling.calculate();

		Assert.assertEquals(16, score);
	}

	@Test
	public void testCalculate_EinSpare_DreiRunden() {
		bowling.add(Turn.create(6, 4));
		bowling.add(Turn.create(8, 1));
		bowling.add(Turn.create(0, 0));

		int score = bowling.calculate();

		Assert.assertEquals(10 + 8 + 9, score);
	}

	@Test
	public void testCalculate_EinStrike_DreiRunden() {
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(5, 4));
		bowling.add(Turn.create(0, 0));

		int score = bowling.calculate();

		Assert.assertEquals(10 + 5 + 4 + 9, score);
	}

	@Test
	public void testCalculate_ZweiStrikes_DreiRunden() {
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(3, 2));

		int score = bowling.calculate();

		Assert.assertEquals((10 + 10 + 3) + (10 + 3 + 2) + (3 + 2), score);
	}

	@Test
	public void testCalculate_SpareGefolgtVonStrike_DreiRunden() {
		bowling.add(Turn.create(1, 9));
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(3, 2));

		int score = bowling.calculate();

		Assert.assertEquals((1 + 9 + 10) + (10 + 3 + 2) + (3 + 2), score);
	}

	@Test
	public void testCalculate_GanzesSpiel_NurStrikes() {
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(10, 0));
		bowling.add(Turn.create(10, 0));

		int score = bowling.calculate();

		Assert.assertEquals(300, score);
	}

	@Test
	public void testCalculate_GanzesSpiel_Nur9() {
		bowling.add(Turn.create(9, 0));
		bowling.add(Turn.create(9, 0));
		bowling.add(Turn.create(9, 0));
		bowling.add(Turn.create(9, 0));
		bowling.add(Turn.create(9, 0));
		bowling.add(Turn.create(9, 0));
		bowling.add(Turn.create(9, 0));
		bowling.add(Turn.create(9, 0));
		bowling.add(Turn.create(9, 0));
		bowling.add(Turn.create(9, 0));

		int score = bowling.calculate();

		Assert.assertEquals(90, score);
	}

	@Test
	public void testCalculate_GanzesSpiel_NurSpares5_5() {
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 0));

		int score = bowling.calculate();

		Assert.assertEquals(150, score);
	}

	@Test
	public void testCalculate_GanzesSpiel_NurSpares5_5_LetzterWurfEnthaeltZweiWuerfe() {
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 5));
		bowling.add(Turn.create(5, 1));

		int score = bowling.calculate();

		Assert.assertEquals(150, score);
	}

}
