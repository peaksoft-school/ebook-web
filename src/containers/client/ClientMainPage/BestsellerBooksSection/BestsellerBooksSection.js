import { useState } from 'react'
import { ReactComponent as ArrowButton } from '../../../../assets/icons/orangeArrow.svg'
import { initionalbetsellerBooks } from '../../../../utils/constants/books'
import Button from '../../../../components/UI/Button/Button'
import classes from './BestsellerBooksSection.module.css'

const BestsellerBooksSection = () => {
   const [betsellerBooks, setBetsellerBooks] = useState(initionalbetsellerBooks)

   const moveToLeft = () => {
      const firstbook = betsellerBooks.pop()
      setBetsellerBooks([firstbook, ...betsellerBooks])
   }

   const moveToRight = () => {
      const lastbook = betsellerBooks.shift()
      setBetsellerBooks([...betsellerBooks, lastbook])
   }

   return (
      <div className={classes.bestsellerBooksSectionContainer}>
         <div className={classes.sectionTopPart}>
            <h2>Бестселлеры</h2>
            <Button variant="aboutMoreBtn">Смотреть все</Button>
         </div>
         <div className={classes.bookContent}>
            <div className={classes.bookDescription}>
               <h1 className={classes.bookTitle}>
                  {betsellerBooks[0].book.bookName}
               </h1>
               <p className={classes.aboutBook}>
                  {betsellerBooks[0].book.aboutBook}
               </p>
               <div className={classes.bottomPartAboutBook}>
                  <Button variant="aboutMoreBtn">Подробнее</Button>
                  <p className={classes.price}>
                     {betsellerBooks[0].book.netPrice} C
                  </p>
               </div>
            </div>
            <div className={classes.books}>
               <img
                  className={classes.mainImage}
                  src={betsellerBooks[0].book.url}
                  alt=""
               />
               {betsellerBooks.slice(1).map((book) => {
                  return (
                     <img
                        key={book.id}
                        className={classes.image}
                        src={book.book.url}
                        alt=""
                     />
                  )
               })}
            </div>
         </div>
         <div className={classes.arrowButtonContainer}>
            <ArrowButton
               onClick={moveToLeft}
               className={classes.arrowButtonLeft}
            />
            <ArrowButton
               onClick={moveToRight}
               className={classes.arrowButtonRight}
            />
         </div>
      </div>
   )
}

export default BestsellerBooksSection
