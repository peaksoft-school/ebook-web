import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { sendRequest } from '../../../../../utils/helpers'
import { asyncUpdateBreadcrumb } from '../../../../../store/breadCrumbsSlice'
import { ROUTES } from '../../../../../utils/constants/constants'
import classes from './SellerItem.module.css'
import DeleteButton from '../../../../../components/UI/DeleteButton/DeleteButton'
import ModalForDelete from '../../../../../components/UI/ModalForDelete/ModalForDelete'

const SellerItem = (props) => {
   const { id, firstName, lastName, phoneNumber, email, booksum } = props

   const breadcrumbs = [
      {
         route_name: 'Продавцы',
         route: ROUTES.SELLERS,
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
      const sellerUrl = { url: `api/vendor/deleteById/${id}`, method: 'DELETE' }
      sendRequest(sellerUrl)
   }

   const senBreadCrumbs = () => {
      dispatch(asyncUpdateBreadcrumb(breadcrumbs))
   }

   return (
      <div className={classes.containerForLi}>
         <Link to={`${ROUTES.SELLERS}/${id}`} key={id}>
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
