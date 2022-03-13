import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { sendRequest } from '../../../utils/helpers'
import classes from './ShowingBooksByAuthorOrPublishingHouse.module.css'
import {
   SEARCHBYPUBLISHER,
   SEARCHBYAUTHORNAME,
} from '../../../utils/constants/urls'

const ShowingBooksByAuthorOrPublishingHouse = () => {
   const { authorName, publicationName } = useParams()

   useEffect(async () => {
      if (authorName !== undefined) {
         const configRequest = { url: `${SEARCHBYAUTHORNAME}${authorName}` }
         const response = await sendRequest(configRequest)
         console.log(response)
      }
      if (publicationName !== undefined) {
         const configRequest = { url: `${SEARCHBYPUBLISHER}${publicationName}` }
         const response = await sendRequest(configRequest)
         console.log(response)
      }
   }, [authorName, publicationName])

   return (
      <div className={classes.contentContainer}>
         <div className={classes.contentContainerHeader}>
            <h1>Author</h1>
            <h1>Publishing House</h1>
            <h1>количество книг</h1>
         </div>
         <div />
      </div>
   )
}

export default ShowingBooksByAuthorOrPublishingHouse
