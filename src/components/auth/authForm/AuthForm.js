import ClientRegistrationForm from '../registration/clientRegistrationForm/ClientRegistrationForm'
import SignInForm from '../signInForm/SignInForm'
import VendorRegistrationForm from '../registration/vendorRegistrationForm/VendorRegistrationForm'
import classes from './AuthForm.module.css'
import { useCallback, useEffect, useState } from 'react'
import { IS_LOGIN, IS_VENDOR, IS_USER } from '../../../utils/constants'
import { useSelector } from 'react-redux'

const AuthForm = () => {
	const [typeOfRegistration, setTypeOfRegistration] = useState(IS_LOGIN)

	const showSignInFormRegistration = typeOfRegistration === IS_LOGIN
	const showNewUserFormRegistration = typeOfRegistration === IS_USER
	const showNewVendorFormRegistration = typeOfRegistration === IS_VENDOR

	const userRegCredential = useSelector(
		(state) => state.authorization.userRegCredential,
	)

	const redirectToSignIn = useCallback(() => {
		if (userRegCredential) {
			signUpFromChangeHandler()
		}
	}, [userRegCredential])

	useEffect(() => {
		redirectToSignIn()
	}, [redirectToSignIn])

	const vendorFormChangeHandler = () => {
		setTypeOfRegistration(IS_VENDOR)
	}

	const signUpFromChangeHandler = () => {
		setTypeOfRegistration(IS_LOGIN)
	}

	const userFormChangeHandler = () => {
		setTypeOfRegistration(IS_USER)
	}

	return (
		<section className={classes.authformbox}>
			<div className={classes.authbuttons}>
				<button
					className={`${
						showSignInFormRegistration
							? classes.active
							: classes.loginBtn
					}`}
					onClick={signUpFromChangeHandler}
				>
					Войти
				</button>
				<button
					className={`${
						showNewVendorFormRegistration ||
						showNewUserFormRegistration
							? classes.active
							: classes.loginBtn
					}`}
					onClick={userFormChangeHandler}
				>
					Регистрация
				</button>
			</div>
			{showSignInFormRegistration && <SignInForm />}
			{showNewUserFormRegistration && (
				<>
					<ClientRegistrationForm />
					<button
						className={classes.sallerOnEbook}
						onClick={vendorFormChangeHandler}
					>
						Стать продавцом на eBook
					</button>
				</>
			)}
			{showNewVendorFormRegistration && <VendorRegistrationForm />}
		</section>
	)
}

export default AuthForm
