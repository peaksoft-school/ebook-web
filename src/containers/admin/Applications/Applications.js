import { useEffect, useState } from 'react'
import classes from './Applications.module.css'
import { sendRequest } from '../../../utils/helpers'
import { APPLICATIONS } from '../../../utils/constants/urls'
import ApplicationBook from './ApplicationBook/ApplicationBook'

const Applications = () => {
   const [applications, setApplication] = useState([])
   const getApplications = async () => {
      const configRequest = {
         url: APPLICATIONS.GET_ALL_APPLICATIONS,
      }
      const response = await sendRequest(configRequest)
      setApplication(response)
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
               return <ApplicationBook key={book.bookName} book={book} />
            })}
         </div>
      </div>
   )
}

export default Applications
