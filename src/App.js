import './App.css'
import AuthCart from './components/loginForm/authCart/AuthCart'


function App() {
	const state = true
	return <div className='App'>
		{state && <AuthCart/>}
	</div>
}

export default App
