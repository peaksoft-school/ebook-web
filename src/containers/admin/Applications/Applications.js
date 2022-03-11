import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sendRequest } from '../../../utils/helpers'
import { APPLICATIONS } from '../../../utils/constants/urls'
import { ROUTES } from '../../../utils/constants/constants'
import classes from './Applications.module.css'
import ApplicationBook from './ApplicationBook/ApplicationBook'

const Applications = () => {
   const [applications, setApplication] = useState([])
   const navigate = useNavigate()

   const navigateToBookPage = (id) => {
      navigate(`${ROUTES.ADMIN_BOOK_PAGE}/${id}`)
   }

   const getApplications = async () => {
      try {
         const configRequest = {
            url: APPLICATIONS.GET_ALL_APPLICATIONS,
         }
         const response = await sendRequest(configRequest)
         await setApplication(response)
      } catch (error) {
         console.log(error.message)
      }
   }

   useEffect(() => {
      getApplications()
   }, [])

   return (
      <div className={classes.applicationsContainer}>
         <div className={classes.containerTopPart}>
            <p className={classes.totalAmount}>
               Всего заявок: {applications.length}
            </p>
            {/* <p className={classes.unwatches}>Непосмотренные 234</p> */}
         </div>
         <div className={classes.bookList}>
            {applications.map((book) => {
               return (
                  <ApplicationBook
                     navigateToBookPage={navigateToBookPage}
                     key={book.bookName}
                     book={book}
                  />
               )
            })}
         </div>
      </div>
   )
}

export default Applications
