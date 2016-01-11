package tennis;

public class RightPlayer extends Player {

    public RightPlayer(Game game) {
        super(game);
    }

    @Override
    public void point() {
        game.addPoint(this);
    }
}
