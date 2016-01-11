package tennis;

import org.junit.*;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class TestLeftPlayer {

    @Test
    public void pointNotifiesGameAboutAPointForPlayer1() {
        Game mockGame = mock(Game.class);
        Player player = new LeftPlayer(mockGame);
        player.point();
        verify(mockGame).addPoint(player);
    }
}
