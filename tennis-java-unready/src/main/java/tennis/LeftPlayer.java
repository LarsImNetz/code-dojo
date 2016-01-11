package tennis;

public class LeftPlayer extends Player {

    public LeftPlayer(Game game) {
        super(game);
    }

    @Override
    public void point() {
        game.addPoint(this);
    }
}
