import { useState, useCallback, useEffect } from 'react'
import AudioBook from '../addAudioBook/AddAudioBook'
import ElectroBook from '../addElectroBook/AddElectroBook'
import Papperbook from '../addPapperBook/AddPapperBook'
import classes from './AddBookForm.module.css'
import UploadImageCart from '../imageUploader/UploadImageCart'
import { sendRequest } from '../../../../utils/helpers'
import {
   IS_AUDIOBOOK,
   IS_PAPPERBOOK,
   IS_ELECTROBOOK,
} from '../../../../utils/constants/constants'

const AddBookForm = () => {
   const [typeOfBook, setTypeOfBook] = useState(IS_PAPPERBOOK)
   const [getAllLanguages, setGetAllLanguages] = useState([])

   const genresUrl = 'api/books/languages'

   const getAllLanguagesApi = useCallback(async () => {
      const requestConfig = {
         url: genresUrl,
         method: 'GET',
      }
      const response = await sendRequest(requestConfig)
      return setGetAllLanguages(response)
   }, [])

   useEffect(() => {
      getAllLanguagesApi()
   }, [])

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

   const onPaperBookSubmit = () => {
      //   console.log(data)
   }

   return (
      <form onSubmit={onPaperBookSubmit}>
         <main className={classes.adminBlog}>
            <p className={classes.uploadthreeBooks}>Загрузите 3 фото *</p>
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
               {papperBook && (
                  <Papperbook
                     onSubmit={onPaperBookSubmit}
                     languagesFromApi={getAllLanguages}
                  />
               )}
               {audioBook && <AudioBook />}
               {electroBook && <ElectroBook />}
            </section>
         </main>
      </form>
   )
}

export default AddBookForm
