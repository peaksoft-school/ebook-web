import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../../utils/helpers'
import Button from '../../UI/Button/Button'
import classes from './UserProfile.module.css'
import ModalForDelete from '../../UI/ModalForDelete/ModalForDelete'

const UserProfile = () => {
   const [isShowModal, setIsShowModal] = useState(false)
   const [userById, setUserById] = useState('')

   const navigate = useNavigate()

   const params = useParams()

   const getUserById = async () => {
      const userUrl = {
         url: `api/clients/getById/${params.userId}`,
      }
      const response = await sendRequest(userUrl)
      await setUserById(response)
   }

   useEffect(() => {
      getUserById()
   }, [])

   const onOpenHundler = () => {
      setIsShowModal(true)
   }

   const onCloseHundler = () => {
      setIsShowModal(false)
   }

   const onDeleteHundler = () => {
      setIsShowModal(false)
      const userUrl = {
         url: `api/client/delete/${params.userId}`,
         method: 'DELETE',
      }
      sendRequest(userUrl)
      navigate(-1)
   }

   return (
      <div className={classes.profileContainer}>
         <div className={classes.informationContainer}>
            <div className={classes.smallBox}>
               <p className={classes.title}>Имя</p>
               <p>{userById.name}</p>
            </div>
            <div className={classes.smallBox}>
               <p className={classes.title}>Email</p>
               <p>{userById.email}</p>
            </div>
            <div className={classes.smallBox}>
               <p className={classes.title}>Дата регистрации</p>
               <p>{userById.dateOfRegistration}</p>
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
               fullName={userById.name}
               id={userById.id}
            />
         )}
      </div>
   )
}

export default UserProfile
