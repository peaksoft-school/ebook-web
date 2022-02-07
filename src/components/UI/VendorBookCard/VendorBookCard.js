import React from 'react';
import classes from './VendorBookCard.module.css'
import {ReactComponent as Icon} from '../../../assets/icons/Controls Icon.svg'


const VendorBookCard = ({book, isOpen, isPopUp, className, children }) => {
  

  return <div className={classes.containterVendorBookCard}>
           <ul className={classes.styles}>
            <li>
                <div className={`${classes.card} ${className}`} onClick={isOpen}>
                    {children}
                    <Icon className={classes.vector} onClick={isPopUp}/>
                    <img className={classes.vedorbookcardimg} src={book.url} alt=''/>
                    <div className={classes.info}>
                        <div>
                            <p className={classes.title}>История Книги</p>
                            <p className={classes.date}>20 февраля</p>
                        </div>
                        <div className={classes.pricel}>
                            <p className={classes.price}> 255с</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
  </div>;
};

export default VendorBookCard;
