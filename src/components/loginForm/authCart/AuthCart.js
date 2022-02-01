import AuthForm from '../../loginForm/authForm/LoginForm'
import Modal from '../../../'

const AuthCart = (props) => {

	return (
		<Modal onClose={props.onClose}>
			<AuthForm />
		</Modal>
	)
}

export default AuthCart
