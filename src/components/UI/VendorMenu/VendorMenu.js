import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './VendorMenu.module.css'
import Button from '../Button/Button'
import { ROUTES } from '../../../utils/constants/constants'
import { PROMO_CREATE } from '../../../utils/constants/urls'
import { ReactComponent as I } from '../../../assets/icons/i.svg'
import { ReactComponent as Plus } from '../../../assets/icons/addBookPlus.svg'
import PromoCodeModal from '../PromoCodeModal/PromoCodeModal'
import { sendRequest } from '../../../utils/helpers'

const VendorMenu = () => {
   const [promo, setPromo] = useState(false)

   const PromoCodeChangeHAndler = () => {
      setPromo((promo) => !promo)
   }

   const sendRequestPromoCode = async (data) => {
      // console.log(data)
      const confiqRequset = { url: PROMO_CREATE, method: 'POST', body: data }
      const response = await sendRequest(confiqRequset)
      console.log(response)
   }
   return (
      <div className={classes.container}>
         <div className={classes.craete}>
            <Button variant="create" onClick={PromoCodeChangeHAndler}>
               Создать промокод
            </Button>
            <I className={classes.icon} />
         </div>
         {promo && (
            <PromoCodeModal
               onClose={PromoCodeChangeHAndler}
               sendRequestPromoCode={sendRequestPromoCode}
            />
         )}
         <Link to={ROUTES.ADDBOOKS}>
            <button className={classes.addBooksButton} type="button">
               <Plus className={classes.plusforbtn} /> Добавить Книгу
            </button>
         </Link>
      </div>
   )
}

export default VendorMenu
