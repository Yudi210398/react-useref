import Player from "./components/Player";
import TimerChellenge from "./components/TimerChellenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChellenge title="Gampang" targetTime={1} />
      </div>
    </>
  );
}

export default App;
