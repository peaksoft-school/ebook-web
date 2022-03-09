import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants/constants'
import classes from './VendorBooksInAdmin.module.css'
import Button from '../../../components/UI/Button/Button'
import VendorBookCard from '../../../components/UI/VendorBookCard/VendorBookCard'
import SellectFilter from './SellectFilter/SellectFilter'

const VendorBooksInAdmin = (props) => {
   const { vendorBooks } = props
   const userRole = useSelector((state) => state.role.roleData)
   const navigate = useNavigate()

   const changeCategory = () => {
      // there will be function, which will be make filter category
   }

   const sendRequestLike = (bookIdForLike) => {
      console.log(bookIdForLike)
   }

   const onGetBookId = (id) => {
      if (userRole === 'ADMIN') {
         navigate(`${ROUTES.ADMIN_BOOK_PAGE}/${id}`)
      }
      if (userRole === 'VENDOR') {
         navigate(`${ROUTES.VENDOR_BOOK_PAGE}/${id}`)
      }
      return ''
   }

   return (
      <div className={classes.containerForVendorBookContent}>
         <div className={classes.containerForTopPartInVendorBooks}>
            <p className={classes.numberOfBooks}>
               всего {vendorBooks.length} книг
            </p>
            <SellectFilter changeCategory={changeCategory} />
         </div>
         <hr className={classes.lineInVendorBooks} />
         <div className={classes.containerForbookContnet}>
            {vendorBooks &&
               vendorBooks.map((vendorbooks) => {
                  return (
                     <VendorBookCard
                        onGetBookId={onGetBookId}
                        id={vendorbooks.bookId}
                        sendRequestLike={sendRequestLike}
                        key={vendorbooks.bookId}
                        book={vendorbooks}
                     />
                  )
               })}
         </div>
         <div className={classes.containerForDelleteButton}>
            <Button variant="deleteProfile">Удалить профиль</Button>
         </div>
      </div>
   )
}

export default VendorBooksInAdmin
