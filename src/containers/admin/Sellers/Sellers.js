import { useState, useEffect } from 'react'
import { getSellers } from '../../../utils/constants/mock-data'
import sendRequest from '../../../utils/constants/'
import classes from './Sellers.module.css'
import SellerList from './SellerList/SellerList'

const Sellers = () => {
   const sellerlist = getSellers()

   const [sellers, setSellers] = useState([])

   const getAllSellers = async () => {
      const url = { url: 'api/client/getAll' }
      const response = await sendRequest(url)
      await setSellers(response)
   }

   useEffect(() => {
      getAllSellers()
   }, [])

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
            <SellerList sellerList={sellers} />
         </div>
      </div>
   )
}

export default Sellers
