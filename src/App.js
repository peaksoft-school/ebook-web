import './App.css';
import BookGenreDropdown from './components/BookCardRenderingDropdowns/BookGenreDropdown/BookGenreDropwdown';
import BookStatusDropdown from './components/BookCardRenderingDropdowns/BookStatusDropdown/BookStatusDropdown';
import BookTypeDropdown from './components/BookCardRenderingDropdowns/BookTypeDropdown/BookTypeDropdown';

function App() {
  return (
    <div className="App">
      <BookStatusDropdown/>
      <BookTypeDropdown/>

      <BookGenreDropdown/>
    </div>
  );
}

export default App;
