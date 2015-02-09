package bowling;

public class Bowling {
	Turn[] turns;
	int index;
	int maxIndex;

	public Bowling() {
		turns = new Turn[12];
		for (int i = 0; i < 12; i++) {
			turns[i] = Turn.create(0, 0);
		}
		index = 0;
		maxIndex = 10;
	}

	public void add(Turn turn) {
		turns[index] = turn;
		++index;
	}

	public boolean isSpare(Turn turn) {
		int currentScore = turn.getValue();
		return currentScore == 10 && turn.getFirstValue() != 10;
	}

	public boolean isStrike(Turn turn) {
		return turn.getFirstValue() == 10;
	}

	public int calculate() {
		int score = 0;
		for (int i = 0; i < 10; i++) {
			int currentScore = turns[i].getValue();
			if (isSpare(turns[i])) {
				currentScore += turns[i + 1].getFirstValue();
			} else if (isStrike(turns[i])) {
				// Strike
				int firstValueOfNextTurn = turns[i + 1].getFirstValue();
				currentScore += firstValueOfNextTurn;

				if (firstValueOfNextTurn != 10) {
					int secondValueOfNextTurn = turns[i + 1].getSecondValue();
					currentScore += secondValueOfNextTurn;
				} else {
					int firstValueOfNextNextTurn = turns[i + 2].getFirstValue();
					currentScore += firstValueOfNextNextTurn;
				}
			}

			score += currentScore;
		}
		return score;
	}
}
