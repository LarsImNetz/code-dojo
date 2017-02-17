
public class TennisGame1 implements TennisGame {

	public enum ScoreEnum {
		Love,
		Fifteen,
		Thirty,
		Forty;
	}

    private int scorePlayer1 = 0;
    private int scorePlayer2 = 0;
    private String player1Name;
    private String player2Name;

    public TennisGame1(String player1Name, String player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    public void wonPoint(String playerName) {
        if (playerName.equals("player1")) {
            scorePlayer1++;
        } else {
            scorePlayer2++;
        }
    }

    public String getScore() {
        String score;
        if (isScoreEqual()) {
            score = getEqualScore(scorePlayer1);
        }
        else if (isStillInSet()) {
            score = getSetScore();
        }
        else if (isPlayer1Winner()) {
            score = "Win for player1";
        }
        else if (isPlayer2Winner()) {
            score = "Win for player2";
        }
        else {
            score = getAdvantageScore();
        }
        return score;
    }

    private boolean isScoreEqual() {
        return scorePlayer1 == scorePlayer2;
    }

    private boolean isStillInSet() {
        return scorePlayer1 < 4 && scorePlayer2 < 4;
    }

    private boolean isPlayer2Winner() {
        return scorePlayer2 - scorePlayer1 > 1;
    }

    private boolean isPlayer1Winner() {
        return scorePlayer1 - scorePlayer2 > 1;
    }

    private String getAdvantageScore() {
        return "Advantage " + (isPlayer1Better() ? player1Name : player2Name);
    }

    private boolean isPlayer1Better() {
        return scorePlayer1 - scorePlayer2 == 1;
    }

    private String getSetScore() {
        return getSetScoreForPlayer(scorePlayer1) + "-" + getSetScoreForPlayer(scorePlayer2);
    }

    private String getSetScoreForPlayer(int scorePlayer) {
        return ScoreEnum.values()[scorePlayer].name();
    }

    private String getEqualScore(int scorePlayer) {
        if (scorePlayer < 3) {
            return  ScoreEnum.values()[scorePlayer].name() + "-All";
        }
        return "Deuce";
    }
}
