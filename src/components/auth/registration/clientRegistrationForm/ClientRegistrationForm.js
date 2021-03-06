import { useForm } from 'react-hook-form'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import classes from './ClientRegistrationForm.module.css'
import AuthButton from '../../../UI/authButton/AuthButton'
import InputField from '../../../UI/inputField/InputField'
import eye from '../../../../assets/png/eye.png'
import isEye from '../../../../assets/png/isEye.png'
import {
   EMAIL,
   NAME,
   CONFIRMPASSWORD,
   PASSWORD,
} from '../../../../utils/constants/constants'
import LoadingSpinner from '../../../UI/modal-window/loadingSpinner/LoadingSpinner'
import { authFetch } from '../../../../store/authReducer/signInSlice'

const schema = yup.object().shape({
   name: yup.string().required('First Name should be required please'),
   email: yup.string().email().required(),
   password: yup.string().min(6).max(10).required(),
   confirmpassword: yup.string().oneOf([yup.ref('password'), null]),
})

const ClientRegistration = () => {
   const { error, status } = useSelector((state) => state.authorization)
   const dispatch = useDispatch()

   const clientRegistrationUrl = 'api/clients/signup/client'

   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm({ mode: 'all', resolver: yupResolver(schema) })

   const submitHandler = useCallback(
      (ebookUser) => {
         const transformedData = ebookUser
         delete transformedData.confirmpassword
         const ebookUserInfo = {
            url: clientRegistrationUrl,
            method: 'POST',
            body: ebookUser,
         }
         dispatch(authFetch(ebookUserInfo))
      },
      [dispatch]
   )

   const [isPasswordShown, setIsPasswordShown] = useState(false)

   const [isConfirmPasswordShown, setisConfirmPasswordShown] = useState(false)

   const togglePassword = () => {
      setIsPasswordShown((prevState) => !prevState)
   }

   const toggleisConfirmPasswordShown = () => {
      setisConfirmPasswordShown((prevState) => !prevState)
   }

   const getErrorMessage = () => {
      const errorMessage =
         (errors.name && '?????????????? ?????????????????? ?????? ') ||
         (errors.email && '?????????????? ?????????????????? Email') ||
         (errors.password && '?????????? ???????????? ???????????? ???????? ???? ?????????? 5 ????????????????') ||
         (errors.confirmpassword && '???????????? ???? ??????????????????') ||
         (error && `An error occured: ${error}`)
      return errorMessage
   }

   return (
      <form onSubmit={handleSubmit(submitHandler)}>
         <InputField
            type="name"
            placeholder="???????????????? ???????? ??????"
            label="???????? ??????"
            {...register(NAME)}
            hasError={errors.name}
         />
         <InputField
            type="email"
            placeholder="???????????????? ?????? email"
            label="Email"
            hasError={errors.email}
            {...register(EMAIL)}
         />
         <div className={classes.forAbsolute}>
            <InputField
               type={isPasswordShown ? 'text' : 'password'}
               placeholder="???????????????? ????????????"
               label="????????????"
               autoComplete="off"
               {...register(PASSWORD)}
               hasError={errors.password}
            />
            <img
               className={classes.pngOfPassword}
               src={isPasswordShown ? isEye : eye}
               alt=""
               onClick={togglePassword}
               role="presentation"
            />
            <InputField
               type={isConfirmPasswordShown ? 'text' : 'password'}
               placeholder="?????????????????????? ????????????"
               label="?????????????????????? ????????????"
               autoComplete="off"
               {...register(CONFIRMPASSWORD)}
               hasError={errors.confirmpassword}
            />
            <img
               className={classes.pngOfPassword}
               src={isConfirmPasswordShown ? isEye : eye}
               alt=""
               onClick={toggleisConfirmPasswordShown}
               role="presentation"
            />
         </div>
         <div className={classes.subscribe}>
            <input
               type="checkbox"
               className={classes.subscribeInput}
               {...register('subscribe')}
            />
            <p>?????????????????????? ???? ????????????????, ?????????? ???????????????? ?????????????? ???? eBook </p>
         </div>
         <p className={classes.message}>{getErrorMessage()}</p>
         {status === 'loading' && <LoadingSpinner />}
         <AuthButton type="submit" disabled={!isValid}>
            ?????????????? ??????????????
         </AuthButton>
      </form>
   )
}

export default ClientRegistration
