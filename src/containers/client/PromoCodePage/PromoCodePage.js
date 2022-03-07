import { ReactComponent as PromoCode } from '../../../assets/icons/promocode.svg'
import { promoBooks } from '../../../utils/constants/books'
import classes from './PromoCode.module.css'
import PromoCodeCard from './PromoCodeCard/PromoCodeCard'

const PromoCodePage = () => {
   const render = promoBooks.map((item) => {
      return <PromoCodeCard book={item} key={item.id} />
   })
   return (
      <div className={classes.promo}>
         <PromoCode />
         <span className={classes.title}>Активация промокода eBook</span>
         <div className={classes.textarea}>
            <input className={classes.input} placeholder="Введите промокод" />
            <button type="button" className={classes.button}>
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
      </div>
   )
}

export default PromoCodePage
