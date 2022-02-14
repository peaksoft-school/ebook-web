import InputField from '../../UI/inputField/InputField'
import AuthButton from '../../UI/authButton/AuthButton'
import eye from '../../../assets/png/eye.png'
import isEye from '../../../assets/png/isEye.png'
import classes from './SignIn.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { email, password } from '../../../utils/constants'

const SignIn = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: 'onTouched' })
	
	const onSubmitClientSignUp = (data) => {
		console.log(data)
		
	}
	
	const signInError = errors.email || errors.password
	
	let errorMessage = signInError && (
		<p className={classes.message}>Неправильно указан Email и/или пароль</p>
		)
		
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
				disabled={errors.password ? true : false}
			/>
			<div>
				<InputField
					type={isPasswordShown ? 'text' : 'password'}
					placeholder='Напишите пароль'
					label='Password'
					autoComplete='off'
					{...register(password, {
						required: true,
						validate: (value) => value.length > 4,
					})}
					disabled={errors.email ? true : false}
				/>
				<img
					className={classes.pngOfPassword}
					src={isPasswordShown ? isEye : eye}
					alt=''
					onClick={togglePassword}
				/>
			</div>
			{errorMessage}
			<AuthButton type='submit'  disabled={!isValid}> 
				Войти
			</AuthButton>
		</form>
	)
}
export default SignIn
