import { useState } from 'react'
import classes from './LatestPublicationsSection.module.css'
import Button from '../../../../components/UI/Button/Button'
import BlackWrapper from '../../../../components/UI/BlackWrapper/BlackWrapper'
import { initionalbetsellerBooks } from '../../../../utils/constants/books'

const LatestPublicationsSection = () => {
   const [genreCounter, setGengreCounter] = useState(0)
   console.log(genreCounter, setGengreCounter)

   return (
      <BlackWrapper className={classes.latestPublicationsSectionContainer}>
         <div className={classes.sectionTopPart}>
            <h2 className={classes.containerTitle}>Последние публикации</h2>
            <Button variant="aboutMoreBtn">Смотреть все</Button>
         </div>
         <div className={classes.bookContent}>
            <div className={classes.genres}>
               <p className={classes.genre}>Бизнес-литература</p>
               <p className={classes.genre}>Детские книги</p>
               <p className={classes.genre}>Хобби и досуг</p>
               <p className={classes.genre}>Бизнес-литература</p>
               <p className={classes.genre}>Бизнес-литература</p>
               <p className={classes.genre}>Бизнес-литература</p>
            </div>
            <img
               className={classes.image}
               src={initionalbetsellerBooks[genreCounter].book.url}
               alt=""
            />
            <div className={classes.bookDescription}>
               <h1 className={classes.bookTitle}>
                  {initionalbetsellerBooks[genreCounter].book.bookName}
               </h1>
               <p className={classes.aboutBook}>
                  {initionalbetsellerBooks[genreCounter].book.aboutBook}
               </p>
               <div className={classes.bottomPartAboutBook}>
                  <Button variant="aboutMoreBtn">Подробнее</Button>
                  <p className={classes.price}>
                     {initionalbetsellerBooks[genreCounter].book.netPrice} C
                  </p>
               </div>
            </div>
         </div>
      </BlackWrapper>
   )
}

export default LatestPublicationsSection
