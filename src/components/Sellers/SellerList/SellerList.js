import classes from './SellerList.module.css'
import SellerItem from './SellerItem/SellerItem'

const SellerList = ({ sellerList }) => {
   return (
      <div>
         <ol className={classes.list}>
            {sellerList &&
               sellerList !== [] &&
               sellerList.map((seller) => {
                  return (
                     <SellerItem
                        firstName={seller.first_name}
                        lastName={seller.last_name}
                        phoneNumber={seller.phone_number}
                        email={seller.email}
                        booksum={seller.booksum}
                        id={seller.id}
                        key={seller.id}
                     />
                  )
               })}
         </ol>
      </div>
   )
}

export default SellerList
