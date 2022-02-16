import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import classes from './UserItem.module.css'
import DeleteButton from '../../../../../components/UI/DeleteButton/DeleteButton'
import ModalForDelete from '../../../../../components/UI/ModalForDelete/ModalForDelete'
import { breadCrumbsReducerActions } from '../../../../../store/breadCrumbsSlice'

const UserItem = (props) => {
   const { id, firstName, email } = props

   const breadcrumbs = [
      {
         route_name: 'Пользователи',
         route: '/admin/users',
      },
      {
         route_name: firstName,
      },
   ]

   const [isShowModal, setIsShowModal] = useState(false)
   const dispatch = useDispatch()

   const onOpenHundler = () => {
      setIsShowModal((isShowModal) => !isShowModal)
   }

   const onCloseHundler = () => {
      setIsShowModal((isShowModal) => !isShowModal)
   }

   const onDeleteHundler = () => {
      setIsShowModal((isShowModal) => !isShowModal)
      // there will be dispatch function
   }

   const senBreadCrumbs = () => {
      dispatch(breadCrumbsReducerActions.updateBreadCrumbs(breadcrumbs))
   }

   return (
      <div className={classes.containerLiFor}>
         <Link to={`/admin/users/${id}`}>
            <li
               role="presentation"
               className={classes.li}
               onClick={senBreadCrumbs}
            >
               <p className={classes.mediumBox}>{firstName}</p>
               <p className={classes.mediumBox}>{email}</p>
            </li>
         </Link>
         <DeleteButton onClick={onOpenHundler} />
         {isShowModal && (
            <ModalForDelete
               full_name={firstName}
               id={id}
               onClose={onCloseHundler}
               onDelete={onDeleteHundler}
            />
         )}
      </div>
   )
}

export default UserItem
