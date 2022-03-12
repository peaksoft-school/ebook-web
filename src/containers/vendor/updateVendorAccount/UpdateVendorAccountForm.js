import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import UpdateInput from '../../../components/UI/vendorUpdateInput/UpdateInput'
import classes from './UpdateVendorAccount.module.css'
import { ReactComponent as ShowPassword } from '../../../assets/icons/passwordEye.svg'
import { ReactComponent as HidePassword } from '../../../assets/icons/hidePassword.svg'
import { deleteFromLocalStorage, sendRequest } from '../../../utils/helpers'
import {
   DELETE_VENDOR_BY_ID,
   GET_VENDOR_INFO,
   UPDATE_VENDOR_BY_ID,
} from '../../../utils/constants/urls'
import LoadingSpinner from '../../../components/UI/modal-window/loadingSpinner/LoadingSpinner'
import SuccessfulMessage from '../../../components/UI/successMessage/SuccessfulMessage'
import Modal from '../../../components/UI/modal-window/ModalWindow'
import ModalForDelete from '../../../components/UI/ModalForDelete/ModalForDelete'
import { setAuth } from '../../../store/authReducer/signInSlice'
import { userRoleReducerActions } from '../../../store/userRoleSlice'
import { ROUTES } from '../../../utils/constants/constants'

const UpdateVendorFormAccount = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [vendorInfo, setVendorInfo] = useState('')
   const [isLoading, setIsLoading] = useState(null)
   const getVendorInfo = () => {
      setIsLoading(true)

      setTimeout(async () => {
         const requestConfig = {
            method: 'GET',
            url: GET_VENDOR_INFO,
         }
         const response = await sendRequest(requestConfig)
         await setVendorInfo(response)
         setIsLoading(false)
      }, 2000)
   }
   useEffect(() => {
      getVendorInfo()
   }, [])

   const [success, setSuccessMessage] = useState({
      error: null,
      bookName: '',
      message: '',
   })
   const modalChangeHandler = () => {
      setIsModal((prevState) => !prevState)
   }

   const [isPasswordShown, setIsPasswordShown] = useState(true)
   const [isConfirmPasswordShown, setisConfirmPasswordShown] = useState(true)
   const [newPassword, setNewPassword] = useState(true)
   const [isModal, setIsModal] = useState(false)

   const [modalForDelete, setModalForDelete] = useState(false)

   const modalForDeleteChangeHandler = () => {
      setModalForDelete((prevState) => !prevState)
   }

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
   const {
      email: loadedEmail,
      firstName: loadedFirstName,
      lastName: loadedLastName,
      phoneNumber: loadedPhoneNumber,
      vendorId,
   } = vendorInfo

   const submitHandler = async (data) => {
      const { password, phoneNumber, lastName, firstName, email } = data
      const updateEmail = !email ? loadedEmail : email
      const updateFirstName = !firstName ? loadedFirstName : firstName
      const updateLastName = !lastName ? loadedLastName : lastName
      const updatePhoneNumber = !phoneNumber ? loadedPhoneNumber : phoneNumber
      const transformedData = {
         password: `${password}`,
         phoneNumber: `${updatePhoneNumber}`,
         lastName: updateLastName,
         email: updateEmail,
         firstName: updateFirstName,
         vendorId,
      }
      try {
         const responseConfig = {
            method: 'PUT',
            url: UPDATE_VENDOR_BY_ID + vendorId,
            body: transformedData,
         }
         await sendRequest(responseConfig)
         setSuccessMessage({
            bookName: updateFirstName,
            error: '',
            message: 'Ваши данные успешно изменены',
         })
         return setIsModal(true)
      } catch (error) {
         setSuccessMessage({
            error: error.message || 'Введите корректный пароль',
         })
         return setIsModal(true)
      }
   }

   const deleteVendorAccount = async () => {
      const responseConfig = {
         method: 'DELETE',
         url: DELETE_VENDOR_BY_ID + vendorId,
      }
      await sendRequest(responseConfig)
      deleteFromLocalStorage('EbookUserToken')
      dispatch(setAuth.logout())
      dispatch(userRoleReducerActions.cleanRoleData())
      navigate(ROUTES.CLIENT_MAIN_PAGE)
   }

   return (
      <form
         className={classes.vendorUpdateForm}
         onSubmit={handleSubmit(submitHandler)}
      >
         {isModal && (
            <Modal onClose={modalChangeHandler}>
               <SuccessfulMessage
                  apiAnswer={success}
                  onClose={modalChangeHandler}
               />
            </Modal>
         )}
         {isLoading && <LoadingSpinner />}
         <div className={classes.vendorUpdateFormFirstBox}>
            <h1 className={classes.vendorUpdateFormh1}>Личная информация</h1>
            <UpdateInput
               label="Ваше имя"
               placeholder="Напишите ваше имя"
               type="text"
               id="name"
               className={classes.updateInputs}
               {...register('firstName')}
               defaultValue={loadedFirstName}
            />
            <UpdateInput
               label="Ваша фамилиe"
               placeholder="Введите вашу фамилию"
               id="lastName"
               type="text"
               className={classes.updateInputs}
               {...register('lastName')}
               defaultValue={loadedLastName}
            />
            <UpdateInput
               label="Номер телефона"
               placeholder="+996 (___) __ __ __"
               id="phone"
               type="phone"
               className={classes.updateInputs}
               {...register('phoneNumber')}
               defaultValue={loadedPhoneNumber}
            />
            <UpdateInput
               label="Email"
               placeholder="Напишите ваш Email"
               id="email"
               type="email"
               className={classes.updateInputs}
               {...register('email')}
               defaultValue={loadedEmail}
            />
            {modalForDelete && (
               <ModalForDelete
                  onClose={modalForDeleteChangeHandler}
                  onDelete={deleteVendorAccount}
                  fullName={vendorInfo.lastName}
               />
            )}
            <button
               type="button"
               className={classes.deleteAccountBtn}
               onClick={modalForDeleteChangeHandler}
            >
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
export default UpdateVendorFormAccount
