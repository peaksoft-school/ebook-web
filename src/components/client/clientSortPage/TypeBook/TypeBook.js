import React from 'react'
import classes from './TypeBook.module.css'
import {
   IS_PAPPERBOOK,
   IS_AUDIOBOOK,
   IS_ELECTROBOOK,
} from '../../../../utils/constants/constants'

const TypeBook = ({
   typeOfBook,
   isBookChangeHandler,
   isAudioChangeHandler,
   isElectroChangeHandler,
}) => {
   // const [typeOfBook, setTypeOfBook] = useState(IS_PAPPERBOOK)

   // const isAudioChangeHandler = () => {
   //    setTypeOfBook(IS_AUDIOBOOK)
   // }

   // const isElectroChangeHandler = () => {
   //    setTypeOfBook(IS_ELECTROBOOK)
   // }
   // const isBookChangeHandler = () => {
   //    setTypeOfBook(IS_PAPPERBOOK)
   // }

   const electroBook = typeOfBook === IS_ELECTROBOOK
   const papperBook = typeOfBook === IS_PAPPERBOOK
   const audioBook = typeOfBook === IS_AUDIOBOOK
   return (
      <div className={classes.e}>
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
   )
}

export default TypeBook
