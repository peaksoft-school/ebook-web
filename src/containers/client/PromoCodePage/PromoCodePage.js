import { useState } from 'react'
import { ReactComponent as PromoCode } from '../../../assets/icons/promocode.svg'
import { sendRequest } from '../../../utils/helpers'
import classes from './PromoCode.module.css'
import PromoCodeCard from './PromoCodeCard/PromoCodeCard'

const PromoCodePage = () => {
   const [promo, setPromo] = useState('')
   const [books, setBooks] = useState([])

   const onChangePromoHandler = (e) => {
      setPromo(e.target.value)
   }

   const render = books.map((item) => {
      return (
         <PromoCodeCard
            book={item}
            image={item.image.id}
            key={item.bookId}
            id={item.bookId}
         />
      )
   })

   const findPromo = async () => {
      const confiqRequset = {
         url: `api/promo/find?promo=${promo}`,
      }
      const response = await sendRequest(confiqRequset)
      setBooks(response)
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
               <span>Активировать</span>
            </button>
         </div>
         <span className={classes.span}>
            Промокоды eBook на скидки и подарки вы можете получить в рассылках.
         </span>
         <div className={classes.container}>
            <p className={classes.foundBook}>Найдены {books.length} книг</p>
            <div className={classes.result}>{render}</div>
         </div>
      </form>
   )
}

export default PromoCodePage
