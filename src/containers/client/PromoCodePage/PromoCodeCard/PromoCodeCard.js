import React from 'react'
import classes from './PromoCodeCard.module.css'
import InformationInCard from './InformationCard/InformationCard'

const PromoCodeCard = (props) => {
   const { book, className, onGetBookId } = props

   return (
      <div className={classes.containterVendorBookCard}>
         <div className={classes.styles}>
            <div
               id={book.bookId}
               role="presentation"
               className={`${classes.card} ${className}`}
            >
               <img
                  className={classes.vedorbookcardimg}
                  src={book.url}
                  alt=""
                  role="presentation"
                  onClick={() => onGetBookId(book.bookId)}
               />
               <InformationInCard
                  bookName={book.bookName}
                  bookAuthor={book.bookAuthor}
                  discount={book.discount}
                  pastPrice={book.pastPrice}
                  bookPrice={book.bookPrice}
               />
            </div>
         </div>
      </div>
   )
}

export default PromoCodeCard
