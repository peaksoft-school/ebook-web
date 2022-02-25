import { useState } from 'react'
import { ReactComponent as ArrowButton } from '../../../../assets/icons/orangeArrow.svg'
import Button from '../../../../components/UI/Button/Button'
import classes from './ViewingTheBestBooksSection.module.css'

const ViewingTheBestBooksSection = ({ sectionTitle, books }) => {
   const [topBooks, setTopBooks] = useState(books)

   const moveToLeft = () => {
      const lastbook = topBooks.pop()
      setTopBooks([lastbook, ...topBooks])
   }

   const moveToRight = () => {
      const firstbook = topBooks.shift()
      setTopBooks([...topBooks, firstbook])
   }

   return (
      <div className={classes.viewingTheBestBooksSectionContainer}>
         <div className={classes.sectionTopPart}>
            <h2>{sectionTitle}</h2>
            <Button variant="aboutMoreBtn">Смотреть все</Button>
         </div>
         <div className={classes.bookContent}>
            <div className={classes.bookDescription}>
               <h1 className={classes.bookTitle}>
                  {topBooks[0].book.bookName}
               </h1>
               <p className={classes.aboutBook}>{topBooks[0].book.aboutBook}</p>
               <div className={classes.bottomPartAboutBook}>
                  <Button variant="aboutMoreBtn">Подробнее</Button>
                  <p className={classes.price}>{topBooks[0].book.netPrice} C</p>
               </div>
            </div>
            <div className={classes.books}>
               <img
                  className={classes.mainImage}
                  src={topBooks[0].book.url}
                  alt=""
               />
               {topBooks.slice(1).map((book) => {
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

export default ViewingTheBestBooksSection
