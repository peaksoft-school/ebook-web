import { useState } from 'react'
import { ReactComponent as PromoCode } from '../../../assets/icons/promocode.svg'
import { promoBooks } from '../../../utils/constants/books'
import { sendRequest } from '../../../utils/helpers'
import classes from './PromoCode.module.css'
import PromoCodeCard from './PromoCodeCard/PromoCodeCard'

const PromoCodePage = () => {
   const [promo, setPromo] = useState('')

   const onChangePromoHandler = (e) => {
      setPromo(e.target.value)
   }

   console.log(promo)
   const render = promoBooks.map((item) => {
      return <PromoCodeCard book={item} key={item.id} />
   })

   const findPromo = async () => {
      const confiqRequset = {
         url: `api/promo/find?promo=${promo}`,
      }
      const response = await sendRequest(confiqRequset)
      console.log(response)
   }
   return (
      <form onSubmit={findPromo} className={classes.promo}>
         <PromoCode />
         <span className={classes.title}>Активация промокода eBook</span>
         <div className={classes.textarea}>
            <input
               className={classes.input}
               placeholder="Введите промокод"
               onChange={onChangePromoHandler}
            />
            <button
               type="button"
               className={classes.button}
               onClick={findPromo}
            >
               Активировать
            </button>
         </div>
         <span className={classes.span}>
            Промокоды eBook на скидки и подарки вы можете получить в рассылках.
         </span>
         <div className={classes.container}>
            <p className={classes.foundBook}>Найдены 2344 книг</p>
            <div className={classes.result}>{render}</div>
         </div>
      </form>
   )
}

export default PromoCodePage
