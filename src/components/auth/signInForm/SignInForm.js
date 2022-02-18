import { useForm } from 'react-hook-form'
import { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authFetch } from '../../../store/authReducer/signInSlice'
import { EMAIL, PASSWORD, ROUTES } from '../../../utils/constants/constants'
import InputField from '../../UI/inputField/InputField'
import AuthButton from '../../UI/authButton/AuthButton'
import eye from '../../../assets/png/eye.png'
import isEye from '../../../assets/png/isEye.png'
import classes from './SignInForm.module.css'
import LoadingSpinner from '../../UI/modal-window/loadingSpinner/LoadingSpinner'

const SignIn = () => {
   const { error, status, role } = useSelector((state) => state.authorization)
   const dispatch = useDispatch()
   const authentication = 'api/authentication'
   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm({ mode: 'all' })
   const navigate = useNavigate()

   const submitHandler = useCallback(
      (ebookUser) => {
         const ebookUserInfo = {
            url: authentication,
            method: 'POST',
            body: ebookUser,
         }
         dispatch(authFetch(ebookUserInfo))
      },
      [dispatch]
   )

   const navigateToRole = () => {
      if (status === 'resolved') {
         if (role === 'ADMIN') {
            return navigate(ROUTES.APPLICATIONS)
         }
         if (role === 'VENDOR') {
            return navigate(ROUTES.VENDOR_AREA)
         }
         if (role === 'CLIENT') {
            return navigate(ROUTES.CLIENT)
         }
      }
      return navigate('/login')
   }

   useEffect(() => {
      navigateToRole()
   }, [status === 'resolved'])

   const getErrorMessage = () => {
      const errorMessage =
         ((errors.email || errors.password) &&
            'Неправильно указан Email и/или пароль') ||
         (error && `${error}`)
      return errorMessage
   }

   const [isPasswordShown, setIsPasswordShown] = useState(false)

   const togglePassword = () => {
      setIsPasswordShown(!isPasswordShown)
   }

   return (
      <form onSubmit={handleSubmit(submitHandler)}>
         <InputField
            type="email"
            placeholder="Напишите email"
            label="Email"
            {...register(EMAIL, {
               required: true,
               pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            disabled={!!errors.password}
            hasError={errors.email}
         />
         <div>
            <InputField
               type={isPasswordShown ? 'text' : 'password'}
               placeholder="Напишите пароль"
               label="Password"
               autoComplete="off"
               {...register(PASSWORD, {
                  required: true,
                  validate: (value) => value.length > 3,
               })}
               disabled={!!errors.email}
               hasError={errors.password}
            />
            <img
               role="presentation"
               className={classes.pngOfPassword}
               src={isPasswordShown ? isEye : eye}
               alt=""
               onClick={togglePassword}
            />
            <p className={classes.message}>{getErrorMessage()}</p>
            {status === 'loading' && <LoadingSpinner />}
         </div>
         <AuthButton type="submit" disabled={!isValid}>
            Войти
         </AuthButton>
         {/* <button type="button" onClick={navigateToRole}>
            Join
         </button> */}
      </form>
   )
}
export default SignIn
