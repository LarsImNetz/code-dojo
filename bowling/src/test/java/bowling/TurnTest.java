package bowling;

import org.junit.Assert;
import org.junit.Test;

public class TurnTest {

	@Test
	public void testSimpleTurn() {
		Turn turn = Turn.create(1, 0);
		Assert.assertEquals(1, turn.getValue());
	}

	@Test
	public void testStrike() {
		Turn strike = Turn.create(10, 0);
		Assert.assertEquals(10, strike.getValue());
		Assert.assertEquals(10, strike.getFirstValue());
		Assert.assertEquals(0, strike.getSecondValue());
	}

	@Test
	public void testSpare() {
		Turn spare = Turn.create(1, 9);
		Assert.assertEquals(1, spare.getFirstValue());
		Assert.assertEquals(9, spare.getSecondValue());
	}

	@Test(expected = IllegalArgumentException.class)
	public void testCreate_InvalidTurn() {
		Turn.create(-1, 4);
	}

	@Test(expected = IllegalArgumentException.class)
	public void testCreate_SecondInvalidTurn() {
		Turn.create(0, -1);
	}

	@Test(expected = IllegalArgumentException.class)
	public void testCreate_MoreThan10_InvalidTurn() {
		Turn.create(5, 6);
	}
}
