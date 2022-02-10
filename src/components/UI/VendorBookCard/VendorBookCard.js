import React from 'react';
import classes from './VendorBookCard.module.css'
import {ReactComponent as Icon} from '../../../assets/icons/Controls Icon.svg'


const VendorBookCard = ({book, isOpen, isPopUp, className, children}) => {
  

  return <div>
           <div className={classes.styles}>
                <div className={`${classes.card} ${className}`} onClick={isOpen}>
                    {children}
                    <Icon className={classes.vector} onClick={isPopUp}/>
                    <img src={book.url} alt='there will be svg'/>
                    <div className={classes.info}>  
                        <div>
                            <p className={classes.title}>{book.title}</p>
                            <p className={classes.date}>{book.date}</p>
                        </div>
                        <div className={classes.pricel}>
                            <p className={classes.price}>{book.price} с</p>
                        </div>
                    </div>
                </div>
        </div>
  </div>;
};

export default VendorBookCard;
