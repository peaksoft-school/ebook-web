import AuthForm from '../../loginForm/authForm/LoginForm'
import Modal from '../../UI/modal-window/ModalWindow'

const AuthCart = (props) => {
	return (
		<Modal onClose={props.onClose}>
			<AuthForm />
		</Modal>
	)
}

export default AuthCart
