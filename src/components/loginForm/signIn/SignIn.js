import InputField from '../../UI/inputField/InputField'
import AuthButton from '../../UI/authButton/AuthButton'
import eye from '../../../assets/png/eye.png'
import isEye from '../../../assets/png/isEye.png'
import classes from './SignIn.module.css'
import { useForm } from 'react-hook-form'
import { useState, useCallback } from 'react'
import { signIn } from '../../../store/authReducer/signInSetting'
import { EMAIL, PASSWORD } from '../../../utils/constants'
import LoadingSpinner from '../../UI/loadingSpinner/LoadingSpinner'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const SignIn = () => {
	const { status, error } = useSelector((state) => state.authorization)
	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: 'onBlur' })

	const onSubmitClientSignUp = useCallback(
		(data) => {
			dispatch(signIn(data))
		},
		[dispatch],
	)

	const signInError = errors.email || errors.password

	let errorMessage =
		(signInError && (
			<p className={classes.message}>
				Неправильно указан Email и/или пароль
			</p>
		)) ||
		(error && <p className={classes.message}>An error occured: {error}</p>)

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
				{...register(EMAIL, {
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
					{...register(PASSWORD, {
						required: true,
						validate: (value) => value.length > 3,
					})}
					disabled={errors.email ? true : false}
				/>
				<img
					className={classes.pngOfPassword}
					src={isPasswordShown ? isEye : eye}
					alt=''
					onClick={togglePassword}
				/>
				{errorMessage}
				{status === 'loading' && <LoadingSpinner />}
			</div>
			<AuthButton type='submit' disabled={!isValid}>
				Войти
			</AuthButton>
		</form>
	)
}
export default SignIn
