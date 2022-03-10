import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './AdminBookPage.module.css'
import TopPartBookPage from './TopPartBookPage/TopPartBookPage'
import BottomPartBookPage from './BottomPartBookPage/BottomPartBookPage'
import { sendRequest } from '../../../utils/helpers'
import { GET_BOOK_BY_ID, APPLICATIONS } from '../../../utils/constants/urls'
import BreadCrumbs from '../../../components/UI/BreadCrumbs/BreadCrumbs'

const BookPage = () => {
   const params = useParams()
   const [bookInfo, setBookInfo] = useState()

   const sendRequestRejectingHundler = async (sentText) => {
      try {
         const configRequest = {
            url: APPLICATIONS.REJECT_APLLICATION,
            method: 'POST',
            body: sentText,
         }
         sendRequest(configRequest)
      } catch (error) {
         console.log(error.message)
      }
   }
   const sendRequestAcceptingHundler = async (bookId) => {
      try {
         const configRequest = {
            url: `${APPLICATIONS.ACCEPT_APPLICATION}/${bookId}`,
            method: 'POST',
         }
         await sendRequest(configRequest)
      } catch (error) {
         console.log(error.message)
      }
   }

   const getSingleBookById = async () => {
      try {
         const requestConfig = {
            method: 'GET',
            url: GET_BOOK_BY_ID + params.bookById,
         }
         const response = await sendRequest(requestConfig)
         await setBookInfo(response)
      } catch (error) {
         console.log(error.message)
      }
   }

   useEffect(async () => {
      await getSingleBookById()
   }, [])

   return (
      <div className={classes.adminBookWrapper}>
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
