import classes from './VendorBooksInAdmin.module.css'
import Button from '../../../components/UI/Button/Button'
import VendorBookCard from '../../../components/UI/VendorBookCard/VendorBookCard'
import SellectFilter from './SellectFilter/SellectFilter'
// import { vendorBooks } from '../../../utils/constants/mock-data'

const VendorBooksInAdmin = (props) => {
   const { vendorBooks } = props
   const changeCategory = () => {
      // there will be function, which will be make filter category
   }
   console.log(vendorBooks)
   return (
      <div className={classes.containerForVendorBookContent}>
         <div className={classes.containerForTopPartInVendorBooks}>
            <p className={classes.numberOfBooks}>всего 23 книг</p>
            <SellectFilter changeCategory={changeCategory} />
         </div>
         <hr className={classes.lineInVendorBooks} />
         <div className={classes.containerForbookContnet}>
            {vendorBooks &&
               vendorBooks.map((vendorbooks) => {
                  return (
                     <VendorBookCard key={vendorbooks.id} book={vendorbooks} />
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
