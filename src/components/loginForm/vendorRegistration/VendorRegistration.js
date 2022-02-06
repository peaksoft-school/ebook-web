import AuthButton from '../../UI/authButton/AuthButton'
import InputField from '../../UI/inputField/InputField'
import classes from './VendorRegistration.module.css'
import { useForm } from 'react-hook-form'
import isEye from '../../../assets/png/isEye.png'
import eye from '../../../assets/png/eye.png'
import { useCallback, useState } from 'react'
import { CONFIRMPASSWORD, EMAIL, PASSWORD } from '../../../utils/constants'
import LoadingSpinner from '../../UI/loadingSpinner/LoadingSpinner'
import { useDispatch, useSelector } from 'react-redux'
import { vendorRegistration } from '../../../store/authReducer/signInSetting'

const VendorRegistration = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		watch,
	} = useForm({ mode: 'onBlur' })

	const isSamePassword = watch('password')

	const dispatch = useDispatch()
	const { status, error } = useSelector((state) => state.authorization)

	const onSubmitClientSignUp = useCallback(
		(data) => {
			dispatch(vendorRegistration(data))
		},
		[dispatch],
	)

	const [isPasswordShown, setIsPasswordShown] = useState(false)

	const [isConfirmPasswordShown, setisConfirmPasswordShown] = useState(false)

	const togglePassword = () => {
		setIsPasswordShown(!isPasswordShown)
	}

	const toggleisConfirmPasswordShown = () => {
		setisConfirmPasswordShown(!isConfirmPasswordShown)
	}

	let isHasErrorMessage =
		(errors.firstName && (
			<p className={classes.message}>
				Забыли заполнить имя {console.log(errors.NAME)}
			</p>
		)) ||
		(errors.email && (
			<p className={classes.message}>Введите коррекный Email</p>
		)) ||
		(errors.password && (
			<p className={classes.message}>
				Длина пароля должна быть не менее 5 символов
			</p>
		)) ||
		(errors.confrimpassword && (
			<p className={classes.message}>Пороли не совподают</p>
		)) ||
		(errors.phoneNumer && (
			<p className={classes.message}>Введите корретный номер</p>
		)) ||
		(errors.lastName && (
			<p className={classes.message}>Забыли заполнить фамилию</p>
		)) ||
		(error && <p className={classes.message}>An error occured: {error}</p>)

	return (
		<form
			className={classes.form}
			onSubmit={handleSubmit(onSubmitClientSignUp)}
		>
			<InputField
				type='text'
				placeholder='Напишите ваше имя'
				label='Ваше имя'
				{...register('firstName', {
					required: true,
					validate: (value) => value.trim().length !== 0,
				})}
			/>
			<InputField
				type='text'
				placeholder='Напишите вашу фамилию'
				label='Ваша фамилия'
				{...register('lastName', {
					required: true,
					disabled: Boolean(errors.name),
				})}
			/>
			<InputField
				type='tel'
				placeholder='+996 (_ _ _) _ _  _ _  _ _'
				label='Номер вашего телефона'
				onFocus={(e) => (e.target.value = '+996')}
				maxLength='13'
				{...register('phoneNumer', {
					required: true,
					pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
					disabled: Boolean(errors.surname),
				})}
			/>
			<InputField
				type='email'
				placeholder='Напишите ваш email'
				label='Email'
				{...register(EMAIL, {
					required: true,
					pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
					disabled: Boolean(errors.phone),
				})}
			/>
			<div className={classes.forAbsolute}>
				<InputField
					type={isPasswordShown ? 'text' : 'password'}
					placeholder='Напишите пароль'
					label='Пароль'
					autoComplete='off'
					{...register(PASSWORD, {
						required: true,
						validate: (value) => value.trim() > 5,
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
					{...register(CONFIRMPASSWORD, {
						required: true,
						validate: (value) => value === isSamePassword,
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
			{isHasErrorMessage}
			{status === 'loading' && <LoadingSpinner />}
			<AuthButton type='submit' disabled={!isValid}>
				Создать аккаунт
			</AuthButton>
		</form>
	)
}

export default VendorRegistration
