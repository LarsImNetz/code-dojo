package tennis;

public abstract class Player {

    protected Game game;

    public Player(Game game) {
        this.game = game;
    }

    public abstract void point();
}
