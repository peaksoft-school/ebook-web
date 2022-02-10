import AuthForm from '../../loginForm/authForm/LoginForm'
import Modal from '../../UI/modal-window/ModalWindow'

const AuthModal = (props) => {
	return (
		<Modal onClose={props.onClose}>
			<AuthForm />
		</Modal>
	)
}

export default AuthModal


// components/Auth/SignIn/SignIn.js
//                /Registration
//                             /VendorRegistration
//                                                
//                             /ClientRegistrtaion
//                 /AuthForm
//           /Auth.js
//
//