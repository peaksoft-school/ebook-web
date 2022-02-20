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
   const [allLanguages, setGetAllLanguages] = useState([])
   const [allGenres, setGetAllGenres] = useState([])

   const languagesUrl = 'api/books/languages'
   const genresUrl = 'api/genres'

   const getAllLanguagesApi = useCallback(async () => {
      const requestConfig = {
         url: languagesUrl,
         method: 'GET',
      }
      const response = await sendRequest(requestConfig)
      return setGetAllLanguages(response)
   }, [])

   const getAllGenresFromApi = useCallback(async () => {
      const requestConfig = {
         url: genresUrl,
         method: 'GET',
      }
      const response = await sendRequest(requestConfig)
      return setGetAllGenres(response)
   })

   useEffect(() => {
      getAllGenresFromApi()
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
      // data.preventDefault()
      // console.log(data)
   }

   return (
      <div onSubmit={onPaperBookSubmit}>
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
                     languagesFromApi={allLanguages}
                     genres={allGenres}
                  />
               )}
               {audioBook && <AudioBook />}
               {electroBook && <ElectroBook />}
            </section>
         </main>
      </div>
   )
}

export default AddBookForm
