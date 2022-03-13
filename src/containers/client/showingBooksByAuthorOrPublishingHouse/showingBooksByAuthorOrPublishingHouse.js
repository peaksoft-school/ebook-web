import { useParams } from 'react-router-dom'
import classes from './showingBooksByAuthorOrPublishingHouse.module.css'
// import {
//    SEARCHBYPUBLISHER,
//    SEARCHBYAUTHORNAME,
// } from '../../../utils/constants/urls'

const showingBooksByAuthorOrPublishingHouse = () => {
   const params = useParams()
   console.log(params.authorName)
   //    console.log(authorName, publicationName)
   return (
      <div className={classes.contentContainer}>
         <div>
            <h1>Author</h1>
            <h1>Publishing House</h1>
            <h1>количество книг</h1>
         </div>
         <div />
      </div>
   )
}

export default showingBooksByAuthorOrPublishingHouse
