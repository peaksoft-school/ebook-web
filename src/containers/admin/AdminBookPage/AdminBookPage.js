import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './AdminBookPage.module.css'
import TopPartBookPage from './TopPartBookPage/TopPartBookPage'
import BottomPartBookPage from './BottomPartBookPage/BottomPartBookPage'
import { sendRequest } from '../../../utils/helpers'
import { GET_BOOK_BY_ID } from '../../../utils/constants/urls'
import BreadCrumbs from '../../../components/UI/BreadCrumbs/BreadCrumbs'

const BookPage = () => {
   const params = useParams()
   const [bookInfo, setBookInfo] = useState()

   const sendRequestRejectingHundler = (sendRequest) => {
      console.log(sendRequest)
      // api reject not add yet
   }
   const sendRequestAcceptingHundler = (bookId) => {
      console.log(bookId)
      // api accept not add yet
   }

   const getSingleBookById = async () => {
      const requestConfig = {
         method: 'GET',
         url: GET_BOOK_BY_ID + params.bookById,
      }
      const response = await sendRequest(requestConfig)
      console.log(response)
      await setBookInfo(response)
   }

   useEffect(async () => {
      await getSingleBookById()
   }, [])

   return (
      <div>
         <BreadCrumbs />
         {bookInfo && (
            <div className={classes.ContainerForBook}>
               <TopPartBookPage
                  book={bookInfo}
                  sendRequestRejectingBook={sendRequestRejectingHundler}
                  sendRequestAcceptingBook={sendRequestAcceptingHundler}
               />
               <BottomPartBookPage book={bookInfo} />
            </div>
         )}
      </div>
   )
}

export default BookPage
