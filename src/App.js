import './App.css';
import WaveformPlayer from './components/WaveformPlayer/WaveformPlayer';
const track = {
    id: 1,
    title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
    url:"https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3",
    timeAudio:"03:08",
}
// потом я уберу это , после того как вы проверите код
function App() {
  return (
    <div className="App">
      <WaveformPlayer time={track.timeAudio} url={track.url} />
    </div>
  );
}

export default App;
