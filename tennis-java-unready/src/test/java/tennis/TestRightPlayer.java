package tennis;

import org.junit.*;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class TestRightPlayer {

    @Test
    public void pointNotifiesGameAboutAPointForPlayer2() {
        Game mockGame = mock(Game.class);
        Player player = new RightPlayer(mockGame);
        player.point();
        verify(mockGame).addPoint(player);
    }
}
