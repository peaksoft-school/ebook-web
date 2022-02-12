import AuthForm from '../authForm/AuthForm'
import Modal from '../../UI/modal-window/ModalWindow'

const AuthModal = (props) => {
	return (
		<Modal onClose={props.onClose}>
			<AuthForm />
		</Modal>
	)
}

export default AuthModal
