import { useState } from 'react'
import classes from './LatestPublicationsSection.module.css'
import Button from '../../../../components/UI/Button/Button'
import BlackWrapper from '../../../../components/UI/BlackWrapper/BlackWrapper'
import { betsellerBooks } from '../../../../utils/constants/books'
import Genres from './Genres/Genres'
import BookDescription from './BookDescription/BookDescription'

const LatestPublicationsSection = () => {
   const [genreCounter, setGengreCounter] = useState(0)

   return (
      <BlackWrapper className={classes.latestPublicationsSectionContainer}>
         <div className={classes.sectionTopPart}>
            <h2 className={classes.containerTitle}>Последние публикации</h2>
            <Button variant="aboutMoreBtn">Смотреть все</Button>
         </div>
         <div className={classes.bookContent}>
            <Genres setGengreCounter={setGengreCounter} />
            <div className={classes.imageContainer}>
               <img
                  className={classes.image}
                  src={betsellerBooks[genreCounter].book.url}
                  alt=""
               />
            </div>
            <BookDescription
               aboutBook={betsellerBooks[genreCounter].book.aboutBook}
               price={betsellerBooks[genreCounter].book.netPrice}
            />
         </div>
      </BlackWrapper>
   )
}

export default LatestPublicationsSection
