import ClientRegistration from '../clientRegistration/ClientRegistration'
import SignIn from '../signIn/SignIn'
import VendorRegistration from '../vendorRegistration/VendorRegistration'
import classes from './LoginForm.module.css'
import { useState } from 'react'
import { ISLOGIN, ISVENDOR, ISUSER } from '../../../utils/constants'

const AuthForm = () => {
	const [typeOfRegistration, setTypeOfRegistration] = useState(ISLOGIN)

	const showSignInFormRegistration = typeOfRegistration === ISLOGIN
	const showNewUserFormRegistration = typeOfRegistration === ISUSER
	const showNewVendorFormRegistration = typeOfRegistration === ISVENDOR

	const vendorFormChangeHandler = () => {
		setTypeOfRegistration(ISVENDOR)
	}

	const signUpFromChangeHandler = () => {
		setTypeOfRegistration(ISLOGIN)
	}

	const userFormChangeHandler = () => {
		setTypeOfRegistration(ISUSER)
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
			{showSignInFormRegistration && <SignIn />}
			{showNewUserFormRegistration && (
				<>
					<ClientRegistration />
					<button
						className={classes.sallerOnEbook}
						onClick={vendorFormChangeHandler}
					>
						Стать продавцом на eBook
					</button>
				</>
			)}
			{showNewVendorFormRegistration && <VendorRegistration />}
		</section>
	)
}

export default AuthForm
