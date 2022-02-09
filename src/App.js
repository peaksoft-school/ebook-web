import { useSelector } from 'react-redux'
import './App.css'
import AuthCart from './components/loginForm/authCart/AuthCart'


function App() {
	const {token,role} = useSelector(state=> state.authorization)
	console.log(token,role);
	return (
		<div className='App'><AuthCart/></div>
		)
}

export default App
