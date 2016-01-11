package tennis;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class TestGame {

    @Test
    public void addPointPlayer1() {
        Game game = new Game();

        assertEquals(new Score(0), game.getScorePlayer1());

        game.addPoint(new LeftPlayer(game));

        assertEquals(new Score(1), game.getScorePlayer1());
    }

    @Test
    public void addPointPlayer2() {
        Game game = new Game();

        assertEquals(new Score(0), game.getScorePlayer2());

        game.addPoint(new RightPlayer(game));

        assertEquals(new Score(1), game.getScorePlayer2());
    }
}
