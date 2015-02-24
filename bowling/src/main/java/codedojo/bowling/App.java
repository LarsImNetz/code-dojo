package codedojo.bowling;

/**
 * Create a Diamond Printer
 *
 * Wird gefüttert mit 'A' und gibt aus: A
 * 
 * Wird gefüttert mit 'B' und gibt aus: A B B A
 *
 * Wird gefüttert mit 'C' und gibt aus: A B B C C B B A
 * 
 */
public class App {
	public static void main(String[] args) {
		System.out.println("Bowling");

		Bowling game = new Bowling();

		game.add(Turn.create(5, 5));
		game.add(Turn.create(1, 1));
		game.add(Turn.create(1, 1));
		game.add(Turn.create(1, 1));
		game.add(Turn.create(1, 1));
		game.add(Turn.create(1, 1));
		game.add(Turn.create(1, 1));
		game.add(Turn.create(1, 1));
		game.add(Turn.create(5, 0));
		game.add(Turn.create(10, 0));
		game.add(Turn.create(10, 0));
		int score = game.calculate();

		System.out.println(game.toString());
		System.out.println("Total Score: " + score);
	}
}
