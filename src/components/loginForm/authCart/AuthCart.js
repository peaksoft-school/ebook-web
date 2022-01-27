import AuthForm from '../../LoginForm/AuthForm/LoginForm'
import Modal from './ModalWindow'

const AuthCart = (props) => {

	return (
		<Modal onClose={props.onClose}>
			<AuthForm />
		</Modal>
	)
}

export default AuthCart
