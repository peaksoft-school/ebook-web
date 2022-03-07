import { useEffect, useState } from 'react'
import classes from './ClientSortPage.module.css'
import { NAVICON } from '../../../utils/constants/constants'
import PriceInput from '../../UI/PriceInput/PriceInput'
import { sendRequest } from '../../../utils/helpers'
import { GET_GENRES } from '../../../utils/constants/urls'
import GenreCheckBoxItem from './GenreCheckBoxItem/GenreCheckBoxItem'
import TopPart from './TopPart/TopPart'
import TypeBook from './TypeBook/TypeBook'
import LanguagesBook from './LanguagesBook/LanguagesBook'

const ClientSortPage = () => {
   const [firstPrice, setFirstPrice] = useState(10000)
   const [secondPrice, setSecondPrice] = useState(0)
   const [genres, setGenres] = useState([])

   // const sortRequest = {
   //    genres: [0],
   //    price: {
   //       from: secondPrice,
   //       before: firstPrice,
   //    },
   //    languages: 'KYRGYZ',
   //    type: typeOfBook,
   // }
   // const submitHandler = async (event) => {
   //    event.preventDefault()
   //    const requestConfig = {
   //       method: 'POST',
   //       url: 'api/books/sort',
   //       body: sortRequest,
   //    }
   //    const response = await sendRequest(requestConfig)
   //    return response
   // }

   const getGenres = async () => {
      const configRequest = { url: GET_GENRES }
      const response = await sendRequest(configRequest)
      setGenres(response)
      console.log(response)
   }

   const sendRequestGenreById = (genreId) => {
      console.log(genreId)
   }

   useEffect(() => {
      getGenres()
   }, [])
   return (
      <form>
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
                              id={genre.id}
                           />
                        )
                     })}
               </div>
               <TypeBook />
               <PriceInput
                  firstPrice={firstPrice}
                  secondPrice={secondPrice}
                  setFirstPrice={setFirstPrice}
                  setSecondPrice={setSecondPrice}
               />
               <LanguagesBook />
            </div>
            <div>2</div>
         </section>
      </form>
   )
}

export default ClientSortPage
