import { useState } from 'react'
import classes from './ClientSortPage.module.css'
import WhiteWrapper from '../../UI/WhiteWrapper/WhiteWrapper'
import CustomCheckbox from '../../UI/customCheckbox/CustomCheckbox'
import {
   IS_AUDIOBOOK,
   IS_PAPPERBOOK,
   IS_ELECTROBOOK,
   NAVICON,
} from '../../../utils/constants/constants'
import PriceInput from '../../UI/PriceInput/PriceInput'

const ClientSortPage = () => {
   const [arrow, setArrow] = useState(false)
   const [typeOfBook, setTypeOfBook] = useState(IS_PAPPERBOOK)

   const isAudioChangeHandler = () => {
      setTypeOfBook(IS_AUDIOBOOK)
   }

   const isElectroChangeHandler = () => {
      setTypeOfBook(IS_ELECTROBOOK)
   }
   const isBookChangeHandler = () => {
      setTypeOfBook(IS_PAPPERBOOK)
   }

   const electroBook = typeOfBook === IS_ELECTROBOOK
   const papperBook = typeOfBook === IS_PAPPERBOOK
   const audioBook = typeOfBook === IS_AUDIOBOOK

   const submitHandler = (event) => {
      event.preventDefault()
   }
   const ArrowChangeHandler = () => {
      setArrow((prev) => !prev)
   }

   return (
      <form onSubmit={submitHandler}>
         <section className={classes.section}>
            <main className={classes.main}>
               <span className={classes.found}>Найдены $ книг</span>
               <span
                  className={classes.sort}
                  onClick={ArrowChangeHandler}
                  role="presentation"
               >
                  Сортировать <img src={NAVICON.ARRDOWN} alt="" />
                  {arrow && (
                     <WhiteWrapper className={classes.modal}>
                        <span className={classes.new}>Новинки</span>
                        <span className={classes.best}>Бестселлеры</span>
                     </WhiteWrapper>
                  )}
               </span>
            </main>
            <div className={classes.janr}>
               <div className={classes.title}>
                  Жанры <img src={NAVICON.ARRDOWN} alt="" />
               </div>
               <div className={classes.e}>
                  <div className={classes.typeblock}>
                     <div className={classes.title}>
                        Тип <img src={NAVICON.ARRDOWN} alt="" />
                     </div>
                     <div className={classes.changeFormSection}>
                        <label className={classes.checkbox}>
                           <input
                              type="radio"
                              name="type"
                              defaultChecked={papperBook}
                              defaultValue={papperBook}
                              onChange={isBookChangeHandler}
                              className={classes.radioBtn}
                           />
                           Бумажная
                        </label>
                        <label className={classes.checkbox}>
                           <input
                              type="radio"
                              name="type"
                              onChange={isAudioChangeHandler}
                              defaultChecked={audioBook}
                              defaultValue={audioBook}
                              className={classes.radioBtn}
                           />
                           Аудиокнига
                        </label>
                        <label className={classes.checkbox}>
                           <input
                              type="radio"
                              name="type"
                              onChange={isElectroChangeHandler}
                              defaultChecked={electroBook}
                              defaultValue={electroBook}
                              className={classes.radioBtn}
                           />
                           Электонная Книга
                        </label>
                     </div>
                  </div>
               </div>
               <PriceInput />
               <div className={classes.lang}>
                  <span className={classes.lan}>
                     Язык издания <img src={NAVICON.ARRDOWN} alt="" />
                  </span>
                  <div className={classes.lanCheck}>
                     <CustomCheckbox
                        label="Кыргызский язык"
                        className={classes.check}
                     />
                     <CustomCheckbox
                        label="Русский язык"
                        className={classes.check}
                     />
                     <CustomCheckbox
                        label="Английский язык"
                        className={classes.bestsellers}
                     />
                  </div>
               </div>
            </div>
            <div>2</div>
         </section>
      </form>
   )
}

export default ClientSortPage
