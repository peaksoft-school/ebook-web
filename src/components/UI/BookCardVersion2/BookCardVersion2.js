import React from 'react';
import classes from './BookCardVersion2.module.css'
import {ReactComponent as Icon} from '../../../assets/icons/Controls Icon.svg'


const BookCardVersion2 = ({book, onClick, className, children, ...restProps}) => {
  

  return <div>
           <ul className={classes.styles}>
            <li>
                <div className={`${classes.card} ${className}` }>
                    {children}
                    <Icon className={classes.vector} onClick={onClick}/>
                    <img src={book.url}/>
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
            </li>
        </ul>
  </div>;
};

export default BookCardVersion2;
