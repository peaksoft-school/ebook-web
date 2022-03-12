import { useParams } from 'react-router-dom'
import { useState, useCallback, useEffect } from 'react'
import UpdatePaperBook from './updatePaperBook/UpdatePaperBook'
import UpdateAudioBook from './updateAudioBook/UpdateAudioBook'
import UpdateElectroBook from './updateElectroBook/UpdateElectroBook'
import classes from './AdminUpdateBookForm.module.css'
import UploadImageCart from '../adminAddBook/imageUploader/UploadImageCart'
import { sendRequest, getImageUrl } from '../../../utils/helpers'
import {
   IS_AUDIOBOOK,
   IS_PAPPERBOOK,
   IS_ELECTROBOOK,
} from '../../../utils/constants/constants'
import { GET_BOOK_BY_ID } from '../../../utils/constants/urls'

const AdminUpdateBookForm = () => {
   const params = useParams()
   const [bookInfo, setBookInfo] = useState([])
   const getBookById = async () => {
      const requestConfig = {
         url: GET_BOOK_BY_ID + params.bookId,
         method: 'GET',
      }
      const response = await sendRequest(requestConfig)
      await setBookInfo(response)
      if (response.typeOfBook === 'PAPER_BOOK') setTypeOfBook(IS_PAPPERBOOK)
      if (bookInfo.typeOfBook === 'AUDIO_BOOK') setTypeOfBook(IS_AUDIOBOOK)
      if (bookInfo.typeOfBook === 'ELECTRO_BOOK') setTypeOfBook(IS_ELECTROBOOK)
      const firstImageSrc = getImageUrl(response.images[0].id)
      const secondImageSrc = getImageUrl(response.images[1].id)
      const thirdImageSrc = getImageUrl(response.images[2].id)
      setFirstImage({ avatar: firstImageSrc, preview: firstImageSrc })
      setSecondImage({ avatar: secondImageSrc, preview: secondImageSrc })
      setThirdImage({ avatar: thirdImageSrc, preview: thirdImageSrc })
   }

   const [typeOfBook, setTypeOfBook] = useState(IS_AUDIOBOOK)
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

   const getAllGenresFromApi = async () => {
      const requestConfig = {
         url: genresUrl,
         method: 'GET',
      }
      const response = await sendRequest(requestConfig)
      await setGetAllGenres(response)
   }

   useEffect(getAllGenresFromApi, [])

   useEffect(getAllLanguagesApi, [])

   useEffect(getBookById, [])

   const electroBook = typeOfBook === IS_ELECTROBOOK
   const papperBook = typeOfBook === IS_PAPPERBOOK
   const audioBook = typeOfBook === IS_AUDIOBOOK

   const [mainPicture, setFirstImage] = useState('')
   const [secondPicture, setSecondImage] = useState('')
   const [thirdPicture, setThirdImage] = useState('')

   const onChangeMainPictureHandler = (image) => {
      setFirstImage(image)
   }
   const onChangeSecondPictureHandler = (image) => {
      setSecondImage(image)
   }
   const onChangeThirdPictureHandler = (image) => {
      setThirdImage(image)
   }

   const deleteAllPictureHandler = () => {
      setFirstImage('')
      setSecondImage('')
      setThirdImage('')
   }

   const deleteMainPictureHandler = () => {
      setFirstImage('')
   }

   const deleteSecondPictureHandler = () => {
      setSecondImage('')
   }

   const deleteThirdPictureHandler = () => {
      setThirdImage('')
   }
   return (
      <div className={classes.mainContainerUpdateBookForm}>
         <main className={classes.adminBlog}>
            <p className={classes.uploadthreeBooks}>Загрузите 3 фото *</p>
            <UploadImageCart
               deleteThirdPictureHandler={deleteThirdPictureHandler}
               deleteSecondPictureHandler={deleteSecondPictureHandler}
               deleteMainPictureHandler={deleteMainPictureHandler}
               onChangeThirdPictureHandler={onChangeThirdPictureHandler}
               onChangeSecondPictureHandler={onChangeSecondPictureHandler}
               onChangeMainPictureHandler={onChangeMainPictureHandler}
               mainPicture={mainPicture}
               secondPicture={secondPicture}
               thirdPicture={thirdPicture}
               bookInfo={bookInfo}
            />
            <section className={classes.changeTypeofBookUploadSection}>
               <h2 className={classes.type}>Тип</h2>
               <div className={classes.changeFormSection}>
                  <label className={classes.checkbox}>
                     <input
                        type="radio"
                        name="type"
                        value={papperBook}
                        checked={papperBook}
                        className={classes.radioBtn}
                        readOnly
                     />
                     Бумажная
                  </label>
                  <label className={classes.checkbox}>
                     <input
                        type="radio"
                        name="type"
                        value={audioBook}
                        checked={audioBook}
                        readOnly
                        className={classes.radioBtn}
                     />
                     Аудиокнига
                  </label>
                  <label className={classes.checkbox}>
                     <input
                        type="radio"
                        name="type"
                        value={electroBook}
                        checked={electroBook}
                        readOnly
                        className={classes.radioBtn}
                     />
                     Электонная Книга
                  </label>
               </div>
            </section>
            <section className={classes.updateBookSection}>
               {papperBook && (
                  <UpdatePaperBook
                     languagesFromApi={allLanguages}
                     genres={allGenres}
                     mainPicture={mainPicture}
                     secondPicture={secondPicture}
                     thirdPicture={thirdPicture}
                     deleteAllPictureHandler={deleteAllPictureHandler}
                     bookInfo={bookInfo}
                  />
               )}
               {audioBook && (
                  <UpdateAudioBook
                     languagesFromApi={allLanguages}
                     genres={allGenres}
                     mainPicture={mainPicture}
                     secondPicture={secondPicture}
                     thirdPicture={thirdPicture}
                     bookInfo={bookInfo}
                  />
               )}
               {electroBook && (
                  <UpdateElectroBook
                     languagesFromApi={allLanguages}
                     genres={allGenres}
                     mainPicture={mainPicture}
                     secondPicture={secondPicture}
                     thirdPicture={thirdPicture}
                  />
               )}
            </section>
         </main>
      </div>
   )
}

export default AdminUpdateBookForm