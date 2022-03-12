import { useEffect, useState } from 'react'
import classes from './ClientSortPage.module.css'
import {
   NAVICON,
   IS_AUDIOBOOK,
   IS_ELECTROBOOK,
   IS_PAPPERBOOK,
} from '../../../utils/constants/constants'
import PriceInput from '../../UI/PriceInput/PriceInput'
import { sendRequest } from '../../../utils/helpers'
import {
   GET_ALL_LANGUAGES,
   GET_GENRES,
   SORT,
} from '../../../utils/constants/urls'
import GenreCheckBoxItem from './GenreCheckBoxItem/GenreCheckBoxItem'
import TopPart from './TopPart/TopPart'
import TypeBook from './TypeBook/TypeBook'
import LanguagesBook from './LanguagesBook/LanguagesBook'

const ClientSortPage = () => {
   const [firstPrice, setFirstPrice] = useState(10000)
   const [secondPrice, setSecondPrice] = useState(0)
   const [genres, setGenres] = useState([])
   const [genreData, setGenreData] = useState([])
   const [languages, setLanguages] = useState([])
   const [languageData, setLanguageData] = useState([])

   const onChangeSortValueHandler = async (e) => {
      e.preventDefault()
      const bodyReq = {
         genres: genreData,
         price: {
            from: secondPrice,
            before: firstPrice,
         },
         languages: languageData,
         type: typeOfBook,
      }
      const configRequest = {
         url: SORT,
         method: 'POST',
         body: JSON.stringify(bodyReq),
      }
      await sendRequest(configRequest)
   }

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

   const getGenres = async () => {
      const configRequest = { url: GET_GENRES }
      const response = await sendRequest(configRequest)
      setGenres(response)
   }
   const sendRequestGenreById = (genre) => {
      if (genreData.includes(genre)) {
         const newGenres = genreData.filter((item) => item !== genre)
         setGenreData(newGenres)
      } else {
         setGenreData([...genreData, genre])
      }
   }

   const getLanguages = async () => {
      const configRequest = { url: GET_ALL_LANGUAGES }
      const response = await sendRequest(configRequest)
      setLanguages(response)
   }
   const sendRequestLanguagesById = (language) => {
      if (languageData.includes(language)) {
         const newGenres = languageData.filter((item) => item !== language)
         setLanguageData(newGenres)
      } else {
         setLanguageData([...languageData, language])
      }
   }

   useEffect(() => {
      getLanguages()
      getGenres()
   }, [])
   return (
      <form onSubmit={onChangeSortValueHandler}>
         <section className={classes.section}>
            <TopPart />
            <div className={classes.janr}>
               <div className={classes.title}>
                  Жанры <img src={NAVICON.ARRDOWN} alt="" />
               </div>
               <div className={classes.genre}>
                  {genres &&
                     genres.map((genre) => {
                        return (
                           <GenreCheckBoxItem
                              sendRequestGenreById={sendRequestGenreById}
                              genre={genre}
                              key={genre.id}
                              id={genre.id}
                           />
                        )
                     })}
               </div>
               <div className={classes.typeblock}>
                  <div className={classes.title}>
                     Тип <img src={NAVICON.ARRDOWN} alt="" />
                  </div>
                  <TypeBook
                     typeOfBook={typeOfBook}
                     isAudioChangeHandler={isAudioChangeHandler}
                     isBookChangeHandler={isBookChangeHandler}
                     isElectroChangeHandler={isElectroChangeHandler}
                  />
               </div>
               <PriceInput
                  firstPrice={firstPrice}
                  secondPrice={secondPrice}
                  setFirstPrice={setFirstPrice}
                  setSecondPrice={setSecondPrice}
               />
               <div className={classes.lang}>
                  <span className={classes.lan}>
                     Язык издания <img src={NAVICON.ARRDOWN} alt="" />
                  </span>
                  <div className={classes.lanCheck}>
                     {languages &&
                        languages.map((language) => {
                           return (
                              <LanguagesBook
                                 sendRequestLanguagesById={
                                    sendRequestLanguagesById
                                 }
                                 language={language}
                                 key={language}
                              />
                           )
                        })}
                  </div>
               </div>
            </div>
            <button type="submit">FILTER(сказал Байболот)</button>
            <div>2</div>
         </section>
      </form>
   )
}

export default ClientSortPage
