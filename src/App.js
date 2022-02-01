import './App.css';
import AuthCart from './components/loginForm/authCart/AuthCart';
function App() {
  let close = true
  return (
    <div className="App">
      {close && <AuthCart/>}
    </div>
  );
}

export default App;
