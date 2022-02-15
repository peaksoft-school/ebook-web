import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import classes from './SellerItem.module.css'
import DeleteButton from '../../../UI/DeleteButton/DeleteButton'
import ModalForDelete from '../../../UI/ModalForDelete/ModalForDelete'
import { breadCrumbsReducerActions } from '../../../../store/breadCrumbsSlice'

const SellerItem = (props) => {
   const { id, firstName, lastName, phoneNumber, email, booksum } = props

   const breadcrumbs = [
      {
         route_name: 'Продавцы',
         route: '/admin/sellers',
      },
      {
         route_name: `${firstName} ${lastName}`,
      },
   ]

   const dispatch = useDispatch()
   const [isShowModal, setIsShowModal] = useState(false)

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
      <div className={classes.containerForLi}>
         <Link to={`/admin/sellers/${id}`} key={id}>
            <li
               role="presentation"
               className={classes.li}
               onClick={senBreadCrumbs}
            >
               <p className={classes.mediumBox}>
                  {firstName} {lastName}
               </p>
               <p className={classes.mediumBox}>{phoneNumber}</p>
               <p className={classes.mediumBox}>{email}</p>
               <p className={classes.mediumBox}>{booksum}</p>
            </li>
         </Link>
         <DeleteButton onClick={onOpenHundler} />
         {isShowModal && (
            <ModalForDelete
               fullName={`${firstName} ${lastName}`}
               id={id}
               onClose={onCloseHundler}
               onDelete={onDeleteHundler}
            />
         )}
      </div>
   )
}

export default SellerItem
