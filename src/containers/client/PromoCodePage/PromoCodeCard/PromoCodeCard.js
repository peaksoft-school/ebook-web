import React from 'react'
import classes from './PromoCodeCard.module.css'
import InformationInCard from './InformationCard/InformationCard'
import { getImageUrl } from '../../../../utils/helpers'

const PromoCodeCard = (props) => {
   const { book, className, onGetBookId, image } = props
   const imgSrc = getImageUrl(image)

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
                  src={imgSrc}
                  alt=""
                  role="presentation"
                  onClick={() => onGetBookId(book.bookId)}
               />
               <InformationInCard
                  bookName={book.bookName}
                  author={book.author}
                  inBasket={book.inBasket}
                  discount={book.discount}
                  discountedPrice={book.discountedPrice}
                  netPrice={book.netPrice}
               />
            </div>
         </div>
      </div>
   )
}

export default PromoCodeCard
