import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BooksList from './booksList/BooksList'
import { ROUTES } from '../../utils/constants/constants'
import { ReactComponent as Plus } from '../../assets/icons/addBookPlus.svg'
import classes from './BooksCrat.module.css'
import BookTypeDropdown from '../BookCardRenderingDropdowns/BookTypeDropdown/BookTypeDropdown'
import BookGenreDropdown from '../BookCardRenderingDropdowns/BookGenreDropdown/BookGenreDropwdown'
import { sendRequest } from '../../utils/helpers'

const BooksCratLayout = () => {
   const [genres, setGenres] = useState([])
   const [genereBooks, setGenreBooks] = useState([])
   const getGenresUrl = 'api/genres'
   // get generes
   const getGenres = useCallback(async () => {
      const requestConfig = {
         url: getGenresUrl,
         method: 'GET',
      }
      const response = await sendRequest(requestConfig)
      return setGenres(response)
   }, [])
   // get generes by id
   const getGenresBooksById = useCallback(async (id) => {
      const getGenresById = `api/genres/get/${id}`
      const requestConfig = {
         url: getGenresById,
         method: 'GET',
      }
      const response = await sendRequest(requestConfig)
      return setGenreBooks(response)
   }, [])

   useEffect(() => {
      getGenres()
   }, [])

   return (
      <div className={classes.bookCratBox}>
         {/* {status === 'loading' && <h2>Loading...</h2>}
			{error && <h2>An error occered: {error}</h2>} */}
         <div className={classes.customselectbox}>
            <div className={classes.booktypedropdown}>
               <BookTypeDropdown />
               <BookGenreDropdown
                  genres={genres}
                  getGenresBooksById={getGenresBooksById}
               />
            </div>
            <div className={classes.linkToNextPage}>
               <Link to={ROUTES.ADDBOOKS}>
                  <button className={classes.addBooksButton} type="button">
                     <Plus className={classes.plusforbtn} /> Добавить Книгу
                  </button>
               </Link>
            </div>
         </div>
         <div>
            <p className={classes.totalBooksP}>
               Всего: {genereBooks.quantityOfBooks || '0'}
            </p>
            <BooksList books={genereBooks} />
         </div>
      </div>
   )
}
export default BooksCratLayout
