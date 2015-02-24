package codedojo.bowling;

public class Turn {

	public static Turn create(int firstValue, int secondValue) {
		if (firstValue < 0 || secondValue < 0) {
			throw new IllegalArgumentException("Wert muss >= 0 sein");
		}
		Turn turn = new Turn(firstValue, secondValue);
		if (turn.getValue() > 10) {
			throw new IllegalArgumentException("Gesamtwurf muss <= 10 sein");
		}
		return turn;
	}

	final int firstValue;
	final int secondValue;

	private Turn(int firstValue, int secondValue) {
		this.firstValue = firstValue;
		this.secondValue = secondValue;
	}

	public int getValue() {
		return this.firstValue + this.secondValue;
	}

	public int getFirstValue() {
		return this.firstValue;
	}

	public int getSecondValue() {
		return this.secondValue;
	}

	@Override
	public String toString() {
		StringBuilder buf = new StringBuilder();
		if (firstValue == 10) {
			buf.append("X");
		} else {
			buf.append(gameOutput(firstValue));
			if (firstValue + secondValue == 10) {
				buf.append("/");
			} else {
				buf.append(gameOutput(secondValue));
			}
		}
		return buf.toString();
	}

	private String gameOutput(int value) {
		if (value == 0) {
			return "-";
		}
		return String.valueOf(value);
	}
}
