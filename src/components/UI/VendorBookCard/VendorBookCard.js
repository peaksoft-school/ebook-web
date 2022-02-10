import React, { useState } from 'react'
import classes from './VendorBookCard.module.css'
import TopPartInVendorCard from './TopPartInVendorCard/TopPartInVendorCard'
import PopUp from './PopUp/PopUp'
import InformationInCardVendorBook from './InformationInCardVendorBook/InformationInCardVendorBook'

const VendorBookCard = (props) => {
    const { 
        book, 
        isOpen, 
        className, 
    } = props

    const [popUpShown, setPopUpShown] = useState(false)

    const popUpChangeHandler = () => {
        setPopUpShown((prevState) => !prevState)
    }

    return (
        <div className={classes.containterVendorBookCard}>
            <div className={classes.styles}>
                    <div
                        className={`${classes.card} ${className}`}
                        onClick={isOpen}
                    >
                        <TopPartInVendorCard
                        numberOfFavorites={book.numberOfFavorites}
                        numberOfBasket={book.numberOfBasket}
                        popUpChangeHandler={popUpChangeHandler}
                        />
                        {
                            popUpShown && <PopUp/>
                        }
                        <img
                            className={classes.vedorbookcardimg}
                            src={book.url}
                            alt=''
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