import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { sendRequest } from '../../../utils/helpers'
import { APPLICATIONS } from '../../../utils/constants/urls'
import { ROUTES } from '../../../utils/constants/constants'
import classes from './Applications.module.css'
import ApplicationBook from './ApplicationBook/ApplicationBook'
import { asyncUpdateBreadcrumb } from '../../../store/breadCrumbsSlice'

const Applications = () => {
   const [applications, setApplication] = useState([])
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const navigateToBookPage = (bookData) => {
      const breadcrumbs = [
         {
            route_name: 'Заявки',
            route: ROUTES.APPLICATIONS,
         },
         {
            route_name: bookData.bookName,
         },
      ]
      dispatch(asyncUpdateBreadcrumb(breadcrumbs))
      navigate(`${ROUTES.APPLICATION_BOOK}/${bookData.bookId}`)
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
