package tennis;

public class Game {

    Score player1Score;
    Score player2Score;

    public Game() {
        this.player1Score = new Score(0);
        this.player2Score = new Score(0);
    }

    public void addPoint(Player player) {
        if (player instanceof LeftPlayer) {
            this.player1Score.point();
        }
        else {
            this.player2Score.point();
        }
    }

    public Score getScorePlayer1() {
        return player1Score;
    }

    public Score getScorePlayer2() {
        return player2Score;
    }
}
