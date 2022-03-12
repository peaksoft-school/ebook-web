import { useState } from 'react'
import { ReactComponent as PromoCode } from '../../../assets/icons/promocode.svg'
import { promoBooks } from '../../../utils/constants/books'
import { sendRequest } from '../../../utils/helpers'
import classes from './PromoCode.module.css'
import PromoCodeCard from './PromoCodeCard/PromoCodeCard'
import Button from '../../../components/UI/Button/Button'
import Modal from '../../../components/UI/modal-window/ModalWindow'

const PromoCodePage = () => {
   const [activePromo, setActivePromo] = useState('')
   const [error, setError] = useState(false)
   const render = promoBooks.map((item) => {
      return <PromoCodeCard book={item} key={item.id} />
   })

   const onChangePromoHandler = (e) => {
      setActivePromo(e.target.value)
   }

   const onChangeErrorHandler = () => {
      setError((error) => !error)
   }

   const foundPromoBooks = async () => {
      try {
         const configRequest = {
            url: 'api/promo/find',
            method: 'POST',
            body: activePromo,
         }
         const response = await sendRequest(configRequest)
      } catch (error) {
         onChangeErrorHandler()
      }
   }

   return (
      <div className={classes.promo}>
         <PromoCode />
         <span className={classes.title}>Активация промокода eBook</span>
         <div className={classes.textarea}>
            <input
               className={classes.input}
               placeholder="Введите промокод"
               value={activePromo}
               onChange={onChangePromoHandler}
            />
            <button
               type="button"
               className={classes.button}
               onClick={foundPromoBooks}
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
         {error && (
            <Modal onClose={onChangeErrorHandler} className={classes.modal}>
               <div className={classes.text}>
                  Введены неверные символы в коде купона{' '}
                  <Button onClick={onChangeErrorHandler} className={classes.ok}>
                     Ok
                  </Button>
               </div>
            </Modal>
         )}
      </div>
   )
}

export default PromoCodePage
