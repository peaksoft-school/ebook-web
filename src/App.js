import './App.css';
import BookStatusDropdown from './components/BookCardRenderingDropdowns/BookStatusDropdown/BookStatusDropdown';
import BookTypeDropdown from './components/BookCardRenderingDropdowns/BookTypeDropdown/BookTypeDropdown';

function App() {
  return (
    <div className="App">
      <BookStatusDropdown/>
      <BookTypeDropdown/>
    </div>
  );
}

export default App;
