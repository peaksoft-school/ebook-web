import { useEffect } from 'react'
import classes from './Applications.module.css'
import { getFromLocalStorage, sendRequest } from '../../../utils/helpers'
import { APPLICATIONS } from '../../../utils/constants/urls'
import { EBOOKPERSONTOKEN } from '../../../utils/constants/constants'

const Applications = () => {
   const getApplications = () => {
      const userInfo = getFromLocalStorage(EBOOKPERSONTOKEN)
      const configRequest = {
         url: APPLICATIONS.ACCEPT_APPLICATIONS,
         body: userInfo.token,
      }
      const response = sendRequest(configRequest)
      console.log(response)
   }

   useEffect(() => {
      getApplications()
   }, [])
   return (
      <div className={classes.applicationsContainer}>
         <div className={classes.containerTopPart}>
            <p className={classes.totalAmount}>Всего 234</p>
            <p className={classes.unwatches}>Непосмотренные 234</p>
         </div>
         <div className={classes.bookList}>fdnj</div>
      </div>
   )
}

export default Applications
