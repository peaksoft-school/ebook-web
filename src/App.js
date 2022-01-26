import './App.css';
import HistoryOperation from './components/HistoryOperation/HistoryOperation';
import useHttp from './hooks/use-http';
function App() {
  const config = {
    url:'https://jsonplaceholder.typicode.com/users',
    data: [
      {
        id
      }
    ]
}
const history = useHttp(config);
  return (
    <div className="App">
      <HistoryOperation/>
    </div>
  );
}

export default App;
