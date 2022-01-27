import InputField from '../../ReusebleInput/ReusableLabel/InputField'
import AuthButton from '../../ReusebleInput/ReusableButton/AuthButton'
import eye from '../../../assets/img/eye.png'
import isEye from '../../../assets/img/isEye.png'
import classes from './SignIn.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { email, password } from '../../../utils/constants'

const SignIn = () => {

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: 'onChange' })

	const onSubmitClientSignUp = (data) => {
		console.log(data)
	}

	const signInError = errors.email || errors.password

	const [isPasswordShown, setIsPasswordShown] = useState(false)

	const togglePassword = () => {
		setIsPasswordShown(!isPasswordShown)
	}

	return (
		<form onSubmit={handleSubmit(onSubmitClientSignUp)}>
			<InputField
				type='email'
				placeholder='Напишите email'
				label='Email'
				{...register(email, {
					required: true,
					pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
				})}
			/>
			<div>
				<InputField
					type={isPasswordShown ? 'text' : 'password'}
					placeholder='Напишите пароль'
					label='Password'
					autoComplete='off'
					{...register(password, {
						required: true,
						validate: (value) => value > 4,
					})}
				/>
				<img
					className={classes.pngOfPassword}
					src={isPasswordShown ? eye : isEye}
					alt=''
					onClick={togglePassword}
				/>
			</div>
			{signInError && (
				<p className={classes.message}>
					Неправильно указан Email и/или пароль
				</p>
			)}
			<AuthButton type='submit' disabled={!isValid}>
				Войти
			</AuthButton>
		</form>
	)
}
export default SignIn
