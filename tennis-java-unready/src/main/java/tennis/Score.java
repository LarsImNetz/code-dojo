package tennis;

public class Score {

    Integer score;
    public Score(Integer score) {
        this.score = score;
    }

    @Override
    public boolean equals(Object other) {

        return this.score.equals(((Score) other).score);
    }

    public void point() {
        score++;
    }
}
