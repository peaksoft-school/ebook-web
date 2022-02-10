import AuthButton from '../../UI/authButton/AuthButton'
import InputField from '../../UI/inputField/InputField'
import classes from './VendorRegistration.module.css'
import { useForm } from 'react-hook-form'
import isEye from '../../../assets/png/isEye.png'
import eye from '../../../assets/png/eye.png'
import { useCallback, useState } from 'react'
import { EMAIL, PASSWORD } from '../../../utils/constants'
import LoadingSpinner from '../../UI/loadingSpinner/LoadingSpinner'
import { useDispatch, useSelector } from 'react-redux'
import { authFetch } from '../../../store/authReducer/signInSlice'

const VendorRegistration = () => {
	const dispatch = useDispatch()
	const { status, error } = useSelector((state) => state.authorization)
	const vendorRegistrationUrl = 'signup/vendor'

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		watch,
	} = useForm({ mode: 'onBlur' })

	const isSamePassword = watch('password')

	const submitHadnler = useCallback(
		(EbookUser) => {
			delete EbookUser.confrimpassword
			const EbookUserInfo = {EbookUser,url: vendorRegistrationUrl}
			dispatch(authFetch(EbookUserInfo))
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

	const getErrorMessage = () => {
		const isHasErrorMessage =
			(errors.firstName && 'Забыли заполнить имя') ||
			(errors.email && 'Введите коррекный Email') ||
			(errors.password &&
				'Длина пароля должна быть не менее 5 символов') ||
			(errors.confrimpassword && 'Пороли не совподают') ||
			(errors.phoneNumber && 'Введите корретный номер') ||
			(errors.lastName && 'Забыли заполнить фамилию') ||
			(error && `An error occured: ${error}`)
		return isHasErrorMessage
	}

	return (
		<form className={classes.form} onSubmit={handleSubmit(submitHadnler)}>
			<InputField
				type='text'
				placeholder='Напишите ваше имя'
				label='Ваше имя'
				{...register('firstName', {
					required: true,
					validate: (value) => value.trim().length !== 0,
				})}
				hasError={errors.firstName}
			/>
			<InputField
				type='text'
				placeholder='Напишите вашу фамилию'
				label='Ваша фамилия'
				{...register('lastName', {
					required: true,
					disabled: Boolean(errors.firstName),
				})}
				hasError={errors.lastName}
			/>
			<InputField
				type='tel'
				placeholder='+996 (_ _ _) _ _  _ _  _ _'
				label='Номер вашего телефона'
				onFocus={(e) => (e.target.value = '+996')}
				maxLength='13'
				{...register('phoneNumber', {
					required: true,
					pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
					disabled: Boolean(errors.lastName),
				})}
				hasError={errors.phoneNumber}
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
				hasError={errors.email}
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
					hasError={errors.password}
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
					{...register('confrimpassword', {
						required: true,
						validate: (value) => value === isSamePassword,
						disabled: Boolean(errors.password),
					})}
					hasError={errors.confrimpassword}
				/>
				<img
					className={classes.pngOfPassword}
					src={isConfirmPasswordShown ? isEye : eye}
					alt=''
					onClick={toggleisConfirmPasswordShown}
				/>
			</div>
			<p className={classes.message}>{getErrorMessage()}</p>
			{status === 'loading' && <LoadingSpinner />}
			<AuthButton type='submit' disabled={!isValid}>
				Создать аккаунт
			</AuthButton>
		</form>
	)
}

export default VendorRegistration
