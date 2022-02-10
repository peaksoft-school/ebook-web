import './App.css'
import AuthCart from './components/loginForm/authCart/AuthCart'
import { useSelector } from 'react-redux'
function App() {
	const userRegCredential = useSelector(
		(state) => state.authorization.userRegCredential,
	)
	console.log(userRegCredential);
	return (
		<div className='App'>
			<AuthCart />
		</div>
	)
}

export default App
