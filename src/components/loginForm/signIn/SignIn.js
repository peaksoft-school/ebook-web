import InputField from '../../UI/inputField/InputField'
import AuthButton from '../../UI/authButton/AuthButton'
import eye from '../../../assets/png/eye.png'
import isEye from '../../../assets/png/isEye.png'
import classes from './SignIn.module.css'
import { useForm } from 'react-hook-form'
import { useState, useCallback } from 'react'
import { authFetch } from '../../../store/authReducer/signInSlice'
import { EMAIL, PASSWORD } from '../../../utils/constants'
import LoadingSpinner from '../../UI/loadingSpinner/LoadingSpinner'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const SignIn = () => {
	const { status, error } = useSelector((state) => state.authorization)
	const dispatch = useDispatch()
	const authentication = 'authentication'
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({ mode: 'onBlur' })

	const submitHandler = useCallback(
		(EbookUser) => {
			const EbookUserInfo = {EbookUser,url:authentication}
			dispatch(authFetch(EbookUserInfo))
		},
		[dispatch],
	)

	const signInError = errors.email || errors.password

	const getErrorMessage = () => {
		const errorMessage =
			(signInError && 'Неправильно указан Email и/или пароль') ||
			(error && `An occured  ${error}`)
		return errorMessage
	}

	const [isPasswordShown, setIsPasswordShown] = useState(false)

	const togglePassword = () => {
		setIsPasswordShown(!isPasswordShown)
	}

	return (
		<form onSubmit={handleSubmit(submitHandler)}>
			<InputField
				type='email'
				placeholder='Напишите email'
				label='Email'
				{...register(EMAIL, {
					required: true,
					pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
				})}
				disabled={errors.password ? true : false}
				hasError={errors.email}
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
					hasError={errors.password}
				/>
				<img
					className={classes.pngOfPassword}
					src={isPasswordShown ? isEye : eye}
					alt=''
					onClick={togglePassword}
				/>
				<p className={classes.message}>{getErrorMessage()}</p>
				{status === 'loading' && <LoadingSpinner />}
			</div>
			<AuthButton type='submit' disabled={!isValid}>
				Войти
			</AuthButton>
		</form>
	)
}
export default SignIn
