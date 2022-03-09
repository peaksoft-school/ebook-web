import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { sendRequest } from '../../../utils/helpers'
import Button from '../../UI/Button/Button'
import classes from './SellerProfile.module.css'
import ModalForDelete from '../../UI/ModalForDelete/ModalForDelete'

const SellerProfile = (props) => {
   const { onChangeVendorBooks } = props
   const [isShowModal, setIsShowModal] = useState(false)
   const [sellerById, setSellerById] = useState('')

   const navigate = useNavigate()

   const params = useParams()

   const getSellerById = async () => {
      const userUrl = {
         url: `api/vendor/getById/${params.sellerId}`,
      }
      const response = await sendRequest(userUrl)
      onChangeVendorBooks(response.vendorBooks)
      await setSellerById(response)
   }

   useEffect(() => {
      getSellerById()
   }, [])

   const onOpenHundler = () => {
      setIsShowModal(true)
   }

   const onCloseHundler = () => {
      setIsShowModal(false)
   }

   const onDeleteHundler = () => {
      setIsShowModal(false)
      const sellerUrl = {
         url: `api/vendor/deleteById/${params.sellerId}`,
         method: 'DELETE',
      }
      sendRequest(sellerUrl)
      navigate(-1)
   }

   return (
      <div className={classes.profileContainer}>
         <div className={classes.informationContainer}>
            <div className={classes.smallBox}>
               <p className={classes.title}>Имя</p>
               <p>{sellerById.firstName}</p>
            </div>
            <div className={classes.smallBox}>
               <p className={classes.title}>Фамилия</p>
               <p>{sellerById.lastName}</p>
            </div>
            <div className={classes.smallBox}>
               <p className={classes.title}>Номер телефона</p>
               <p>{sellerById.phoneNumber}</p>
            </div>
            <div className={classes.smallBox}>
               <p className={classes.title}>Email</p>
               <p>{sellerById.email}</p>
            </div>
            <div className={classes.smallBox}>
               <p className={classes.title}>Дата регистрации</p>
               <p>{sellerById.dateOfRegistration}</p>
            </div>
            <div className={classes.smallAutoBox} />
         </div>
         <div className={classes.deleteContainer}>
            <Button onClick={onOpenHundler} variant="deleteProfile">
               Удалить профиль
            </Button>
         </div>
         {isShowModal && (
            <ModalForDelete
               onClose={onCloseHundler}
               onDelete={onDeleteHundler}
               fullName={`${sellerById.firstName} ${sellerById.lastName}`}
               id={sellerById.id}
            />
         )}
      </div>
   )
}

export default SellerProfile
