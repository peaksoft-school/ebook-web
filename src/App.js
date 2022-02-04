import './App.css';
import { DeletePopUp } from './components/PopUpMessages/DeletePopUp';
import { RejectPopUp } from './components/PopUpMessages/RejectPopUp';

function App() {
  return (
    <div className="App">
      <DeletePopUp/>
      <RejectPopUp/>
    </div>
  );
}

export default App;
