import classes from './Sellers.module.css'
import { getSellers } from '../../../utils/constants/mock-data'
import SellerList from './SellerList/SellerList'

const Sellers = () => {
   const sellerlist = getSellers()

   return (
      <div className={classes.box}>
         <div className={classes.containerTitle}>
            <p>
               <b>№</b>
            </p>
            <p className={classes.mediumBox}>
               <b>Ф.И.</b>
            </p>
            <p className={classes.mediumBox}>
               <b>Номер телефона</b>
            </p>
            <p className={classes.mediumBox}>
               <b>Почта</b>
            </p>
            <p className={classes.mediumBox}>
               <b>Количество книг</b>
            </p>
         </div>
         <hr className={classes.line} />
         <div className={classes.containerList}>
            <SellerList sellerList={sellerlist} />
         </div>
      </div>
   )
}

export default Sellers
