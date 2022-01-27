import Modal from '../../UI/modal/ModalWindow'
import AuthForm from '../../loginForm/authForm/LoginForm'

const AuthCart = (props) => {

	return (
		<Modal onClose={props.onClose}>
			<AuthForm />
		</Modal>
	)
}

export default AuthCart
