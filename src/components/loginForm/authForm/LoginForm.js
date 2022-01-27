import ClientRegistration from '../clientRegistration/ClientRegistration'
import SignIn from '../signIn/SignIn'
import VendorRegistration from '../vendorRegistration/VendorRegistration'
import classes from './LoginForm.module.css'
import { useState } from 'react'
import { isLogin,isVendor,isUser } from '../../../utils/constants'

const AuthForm = () => {
    
	const [typeOfRegistration, setTypeOfRegistration] = useState(isLogin)

	const showSignInFormRegistration = typeOfRegistration === isLogin
	const showNewUserFormRegistration = typeOfRegistration === isUser
	const showNewVendorFormRegistration = typeOfRegistration === isVendor

	const vendorFormChangeHandler = () => {
		setTypeOfRegistration(isVendor)
	}

	const signUpFromChangeHandler = () => {
		setTypeOfRegistration(isLogin)
	}

	const userFormChangeHandler = () => {
		setTypeOfRegistration(isUser)
	}

	return (
		<section className={classes.authformbox}>
			<div className={classes.authbuttons}>
				<button
					className={`${isLogin ? classes.active : classes.loginBtn}`}
					onClick={signUpFromChangeHandler}
				>
					Войти
				</button>
				<button
					className={`${
						isVendor || isUser ? classes.active : classes.loginBtn
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
