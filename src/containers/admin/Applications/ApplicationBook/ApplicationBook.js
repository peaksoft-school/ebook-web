import React, { useState } from 'react'
import classes from './ApplicationBook.module.css'
import TopPartInApplicationCard from './TopPartInApplicationCard/TopPartInApplicationCard'
import PopUp from './PopUp/PopUp'
import InformationInCardApplicationBook from './InformationInCardApplicationBook/InformationInCardVendorBook'
import { getImageUrl } from '../../../../utils/helpers'

const ApplicationBook = (props) => {
   const { book, isOpen, className, onGetBookId } = props
   console.log(book)
   const [popUpShown, setPopUpShown] = useState(false)
   const popUpChangeHandler = () => {
      setPopUpShown((prevState) => !prevState)
   }
   const imageSrc = getImageUrl(book.image.id)

   return (
      <div className={classes.containterVendorBookCard}>
         <div className={classes.styles}>
            <div
               id={book.bookId}
               role="presentation"
               className={`${classes.card} ${className}`}
               onClick={isOpen}
            >
               <TopPartInApplicationCard
                  numberOfFavorites={book.numberOfFavorites}
                  numberOfBasket={book.numberOfBasket}
                  popUpChangeHandler={popUpChangeHandler}
               />
               {popUpShown && <PopUp />}
               <img
                  className={classes.vedorbookcardimg}
                  src={imageSrc}
                  alt=""
                  role="presentation"
                  onClick={() => onGetBookId(book.bookId)}
               />
               <InformationInCardApplicationBook
                  bookName={book.bookName}
                  date={book.date}
                  netPrice={book.price}
               />
            </div>
         </div>
      </div>
   )
}

export default ApplicationBook
