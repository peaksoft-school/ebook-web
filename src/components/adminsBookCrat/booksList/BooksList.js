// import { useState } from 'react'
// import { GET_BOOK_BY_ID } from '../../../utils/constants/urls'
// import { sendRequest } from '../../../utils/helpers'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants/constants'
import VendorBookCard from '../../UI/VendorBookCard/VendorBookCard'
import classes from './BooksList.module.css'

const BooksList = (props) => {
   const { books } = props
   console.log(books)
   const userRole = useSelector((state) => state.role.roleData)

   const navigate = useNavigate()
   const onGetBookId = (id) => {
      if (userRole === 'ADMIN') {
         navigate(`${ROUTES.ADMIN_BOOK_PAGE}/${id}`)
      }
      if (userRole === 'VENDOR') {
         navigate(`${ROUTES.VENDOR_BOOK_PAGE}/${id}`)
      }
      return ''
   }

   const renderBook =
      books.length !== 0 ? (
         books.books.map((book) => (
            <VendorBookCard
               book={book}
               key={book.bookId}
               onGetBookId={onGetBookId}
               id={book.bookId}
            />
         ))
      ) : (
         <p>No books</p>
      )
   return <div className={classes.bookslistbox}>{renderBook}</div>
}
export default BooksList
