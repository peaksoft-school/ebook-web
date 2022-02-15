import { useState } from 'react'
import AudioBook from '../addAudioBook/AddAudioBook'
import ElectroBook from '../addElectroBook/AddElectroBook'
import Papperbook from '../addPapperBook/AddPapperBook'
import classes from './AddBookForm.module.css'
import UploadImageCart from '../imageUploader/UploadImageCart'
import {
   IS_AUDIOBOOK,
   IS_PAPPERBOOK,
   IS_ELECTROBOOK,
} from '../../../utils/constants'

const AddBookForm = () => {
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

<<<<<<< HEAD
   const onPaperBookSubmit = (data) => {
      console.log(data)
=======
   const onPaperBookSubmit = () => {
      //   console.log(data)
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
   }

   return (
      <form onSubmit={onPaperBookSubmit}>
         <main className={classes.adminBlog}>
<<<<<<< HEAD
            <p className={classes.uploadthreeBooks}>
               Загрузите 3 фото <span className={classes.zvezda}>*</span>
            </p>
=======
            <p className={classes.uploadthreeBooks}>Загрузите 3 фото *</p>
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
            <UploadImageCart />
            <section className={classes.changeTypeofBook}>
               <h2 className={classes.type}>Тип</h2>
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
            </section>
            <section>
               {papperBook && <Papperbook onSubmit={onPaperBookSubmit} />}
               {audioBook && <AudioBook />}
               {electroBook && <ElectroBook />}
            </section>
         </main>
      </form>
   )
}

export default AddBookForm
