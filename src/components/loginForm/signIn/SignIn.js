import { useForm } from 'react-hook-form'
import { useState } from 'react'
import InputField from '../../UI/inputField/InputField'
import AuthButton from '../../UI/authButton/AuthButton'
import eye from '../../../assets/png/eye.png'
import isEye from '../../../assets/png/isEye.png'
import { EMAIL, PASSWORD } from '../../../utils/constants'

const SignIn = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm({ mode: 'onTouched' })

   const onSubmitClientSignUp = () => {
      //   console.log(data)
   }

   const signInError = errors.email || errors.password

   const errorMessage = signInError && (
      <p>Неправильно указан Email и/или пароль</p>
   )

   const [isPasswordShown, setIsPasswordShown] = useState(false)

   const togglePassword = () => {
      setIsPasswordShown(!isPasswordShown)
   }

   return (
      <form onSubmit={handleSubmit(onSubmitClientSignUp)}>
         <InputField
            type="email"
            placeholder="Напишите email"
            label="Email"
            {...register(EMAIL, {
               required: true,
               pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            disabled={!!errors.password}
         />
         <div>
            <InputField
               type={isPasswordShown ? 'text' : 'password'}
               placeholder="Напишите пароль"
               label="Password"
               autoComplete="off"
               {...register(PASSWORD, {
                  required: true,
                  validate: (value) => value.length > 4,
               })}
               disabled={!!errors.EMAIL}
            />
            <img
               role="presentation"
               //    className={classes.pngOfPassword}
               src={isPasswordShown ? isEye : eye}
               alt=""
               onClick={togglePassword}
            />
         </div>
         {errorMessage}
         <AuthButton type="submit" disabled={!isValid}>
            Войти
         </AuthButton>
      </form>
   )
}
export default SignIn
