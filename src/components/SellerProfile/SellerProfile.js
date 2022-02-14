import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Button from '../UI/Button/Button'
import classes from './SellerProfile.module.css'
import ModalForDelete from '../UI/ModalForDelete/ModalForDelete'
import { findSellerById } from '../../utils/constants/mock-data'

const SellerProfile = () => {
   const [isShowModal, setIsShowModal] = useState(false)

   const params = useParams()
   const person = findSellerById(parseInt(params.sellerId, 10))

   const onOpenHundler = () => {
      setIsShowModal(true)
   }

   const onCloseHundler = () => {
      setIsShowModal(false)
   }

   const onDeleteHundler = () => {
      setIsShowModal(false)
   }

   return (
      <div className={classes.profileContainer}>
         <div className={classes.informationContainer}>
            <div className={classes.smallBox}>
               <p className={classes.title}>Имя</p>
               <p>{person.first_name}</p>
            </div>
            <div className={classes.smallBox}>
               <p className={classes.title}>Фамилия</p>
               <p>{person.last_name}</p>
            </div>
            <div className={classes.smallBox}>
               <p className={classes.title}>Номер телефона</p>
               <p>{person.number}</p>
            </div>
            <div className={classes.smallBox}>
               <p className={classes.title}>Email</p>
               <p>{person.email}</p>
            </div>
            <div className={classes.smallBox}>
               <p className={classes.title}>Дата регистрации</p>
               <p>{person.data_redistration}</p>
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
               full_name={`${person.first_name} ${person.last_name}`}
               id={person.id}
            />
         )}
      </div>
   )
}

export default SellerProfile
