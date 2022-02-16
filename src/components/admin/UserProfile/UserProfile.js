import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Button from '../../UI/Button/Button'
import classes from './UserProfile.module.css'
import ModalForDelete from '../../UI/ModalForDelete/ModalForDelete'
import { findUserById } from '../../../utils/constants/mock-data'

const UserProfile = () => {
   const [isShowModal, setIsShowModal] = useState(false)

   const params = useParams()
   const person = findUserById(parseInt(params.userId, 10))

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
               full_name={person.first_name}
               id={person.id}
            />
         )}
      </div>
   )
}

export default UserProfile
