import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import UpdateInput from '../../../components/UI/vendorUpdateInput/UpdateInput'
import classes from './UpdateClientAccount.module.css'
import { ReactComponent as ShowPassword } from '../../../assets/icons/passwordEye.svg'
import { ReactComponent as HidePassword } from '../../../assets/icons/hidePassword.svg'
import { sendRequest } from '../../../utils/helpers'

const UpdateClientFormAccount = () => {
   const [userInfo, setUserInfo] = useState(null)
   const getUserInfo = useCallback(async () => {
      const requestConfig = {
         method: 'GET',
         url: 'api/clients/show/info',
      }
      const response = await sendRequest(requestConfig)
      return setUserInfo(response)
   }, [])
   console.log(userInfo)
   useEffect(() => {
      getUserInfo()
   }, [])

   const [isPasswordShown, setIsPasswordShown] = useState(true)
   const [isConfirmPasswordShown, setisConfirmPasswordShown] = useState(true)
   const [newPassword, setNewPassword] = useState(true)

   const { register, handleSubmit } = useForm({ mode: 'all' })

   const togglePassword = () => {
      setIsPasswordShown((prevState) => !prevState)
   }
   const toggleConfirmPassword = () => {
      setisConfirmPasswordShown((prevState) => !prevState)
   }
   const toggleNewPassword = () => {
      setNewPassword((prevState) => !prevState)
   }

   const showPassword = isPasswordShown ? (
      <ShowPassword
         onClick={togglePassword}
         className={classes.passwordInputIcons}
      />
   ) : (
      <HidePassword
         onClick={togglePassword}
         className={classes.passwordInputIcons2}
      />
   )

   const showConfirmPassword = isConfirmPasswordShown ? (
      <ShowPassword
         onClick={toggleConfirmPassword}
         className={classes.passwordInputIcons}
      />
   ) : (
      <HidePassword
         onClick={toggleConfirmPassword}
         className={classes.passwordInputIcons2}
      />
   )

   const showNewPassword = newPassword ? (
      <ShowPassword
         onClick={toggleNewPassword}
         className={classes.passwordInputIcons}
      />
   ) : (
      <HidePassword
         onClick={toggleNewPassword}
         className={classes.passwordInputIcons2}
      />
   )

   const typeOfPasswordInput = isPasswordShown ? 'password' : 'text'
   const typeOfConfirmInput = isConfirmPasswordShown ? 'password' : 'text'
   const typeOfNewPasswordInput = newPassword ? 'password' : 'text'

   const submitHandler = (data) => {
      const {
         password,
         lastName,
         firstName,
         email,
         currentPassword,
         confirmPassword,
      } = data
      const transformedData = {
         password,
         lastName,
         email,
         firstName,
      }
      console.log(transformedData, data, currentPassword, confirmPassword)
   }

   return (
      <form
         className={classes.vendorUpdateForm}
         onSubmit={handleSubmit(submitHandler)}
      >
         <div className={classes.vendorUpdateFormFirstBox}>
            <h1 className={classes.vendorUpdateFormh1}>Личная информация</h1>
            <UpdateInput
               label="Ваше имя"
               placeholder="Напишите ваше имя"
               type="text"
               id="name"
               className={classes.updateInputs}
               {...register('firstName')}
               defaultValue={userInfo?.name}
            />
            <UpdateInput
               label="Email"
               placeholder="Напишите ваш Email"
               id="email"
               type="email"
               className={classes.updateInputs}
               {...register('email')}
               defaultValue={userInfo?.email}
            />
            <button type="button" className={classes.deleteAccountBtn}>
               Удалить профиль?
            </button>
         </div>
         <div>
            <h1 className={classes.vendorUpdateFormh1}>Изменить пароль</h1>
            <div className={classes.vendorUpdateFormSecondBox}>
               <UpdateInput
                  label="Текущий пароль"
                  placeholder="Напишите текущий пароль"
                  type={typeOfPasswordInput}
                  id="password"
                  className={classes.updateInputs}
                  {...register('currentPassword')}
                  autoComplete="off"
               />
               <p className={classes.forAbsoluteUpdate}>{showPassword}</p>
               <UpdateInput
                  label="Новый пароль"
                  placeholder="Напишите ваш новый пароль"
                  type={typeOfConfirmInput}
                  id="newPassword"
                  className={classes.updateInputs}
                  {...register('password')}
                  autoComplete="off"
               />
               <p className={classes.forAbsoluteUpdate2}>
                  {showConfirmPassword}
               </p>
               <UpdateInput
                  label="Подтвердите пароль"
                  placeholder="Подтвердите пароль"
                  type={typeOfNewPasswordInput}
                  id="confirm"
                  className={classes.updateInputs}
                  {...register('confirmPassword')}
                  autoComplete="off"
               />
               <p className={classes.forAbsoluteUpdate3}>{showNewPassword}</p>
            </div>
            <div>
               <button type="button" className={classes.vendorUpdateSaveBtn}>
                  Отменить
               </button>
               <button type="submit" className={classes.vendorUpdateSaveBtn}>
                  Сохранить
               </button>
            </div>
         </div>
      </form>
   )
}
export default UpdateClientFormAccount
