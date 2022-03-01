import React, { useState } from 'react'
import classes from './VendorBookCard.module.css'
import TopPartInVendorCard from './TopPartInVendorCard/TopPartInVendorCard'
import PopUp from './PopUp/PopUp'
import InformationInCardVendorBook from './InformationInCardVendorBook/InformationInCardVendorBook'
import { getImageUrl } from '../../../utils/helpers'

const VendorBookCard = (props) => {
   const { book, isOpen, className, onGetBookId } = props
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
               <TopPartInVendorCard
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
               <InformationInCardVendorBook
                  bookName={book.bookName}
                  date={book.date}
                  netPrice={book.netPrice}
               />
            </div>
         </div>
      </div>
   )
}

export default VendorBookCard
