import classes from './ClientRegistration.module.css'
import AuthButton from '../../UI/authButton/AuthButton'
import InputField from '../../UI/inputField/InputField'
import eye from '../../../assets/png/eye.png'
import isEye from '../../../assets/png/isEye.png'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
	email,
	name,
	confirmPassword,
	password,
} from '../../../utils/constants'

const ClientRegistration = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		watch,
	} = useForm({ mode: 'onTouched' })

	const isPassworIsSame = watch('password')

	const onSubmitClientSignUp = (data) => {
		console.log(data)
	}

	const [isPasswordShown, setIsPasswordShown] = useState(false)

	const [isConfirmPasswordShown, setisConfirmPasswordShown] = useState(false)

	const togglePassword = () => {
		setIsPasswordShown(!isPasswordShown)
	}

	const toggleisConfirmPasswordShown = () => {
		setisConfirmPasswordShown(!isConfirmPasswordShown)
	}

	let errorMessage =
		(errors.name && (
			<p className={classes.message}>Введите коррекное имя </p>
		)) ||
		(errors.email && (
			<p className={classes.message}>Введите коррекный Email</p>
		)) ||
		(errors.password && (
			<p className={classes.message}>
				Длина пароля должна быть не менее 5 символов
			</p>
		)) ||
		(errors.confirmPassword && (
			<p className={classes.message}>Пороли не совподают</p>
		))

	return (
		<form onSubmit={handleSubmit(onSubmitClientSignUp)}>
			<InputField
				type='name'
				placeholder='Напишите ваше имя'
				label='Ваше имя'
				{...register(name, {
					required: true,
					validate: (value) => value.trim().length !== 0,
				})}
			/>
			<InputField
				type='email'
				placeholder='Напишите ваш email'
				label='Email'
				{...register(email, {
					required: true,
					pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
					disabled: Boolean(errors.name),
				})}
			/>
			<div className={classes.forAbsolute}>
				<InputField
					type={isPasswordShown ? 'text' : 'password'}
					placeholder='Напишите пароль'
					label='Пароль'
					autoComplete='off'
					{...register(password, {
						required: true,
						minLength: 5,
						disabled: Boolean(errors.email),
					})}
				/>
				<img
					className={classes.pngOfPassword}
					src={isPasswordShown ? isEye : eye}
					alt=''
					onClick={togglePassword}
				/>
				<InputField
					type={isConfirmPasswordShown ? 'text' : 'password'}
					placeholder='Подтвердите пароль'
					label='Подтвердите пароль'
					autoComplete='off'
					{...register(confirmPassword, {
						required: true,
						validate: (value) => value === isPassworIsSame,
						disabled: Boolean(errors.password),
					})}
				/>
				<img
					className={classes.pngOfPassword}
					src={isConfirmPasswordShown ? isEye : eye}
					alt=''
					onClick={toggleisConfirmPasswordShown}
				/>
			</div>
			<div className={classes.subscribe}>
				<input
					type='checkbox'
					className={classes.subscribeInput}
					{...register('subscribe')}
				/>
				<p>Подпишитесь на рассылку, чтобы получать новости от eBook </p>
			</div>
			{errorMessage}
			<AuthButton type='submit' disabled={!isValid}>
				Создать аккаунт
			</AuthButton>
		</form>
	)
}

export default ClientRegistration
