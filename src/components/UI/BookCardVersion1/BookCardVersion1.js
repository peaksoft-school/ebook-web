import React from 'react';
import  classes from './BookCardVersion1.module.css'

const BookCardVersion1 = ({book, className, ...restProps}) => {


return (  
<div >
       <ul className={classes.styles}>
        <li>
            <div className={`${classes.card} ${className}`} >
                <img src={book.url}/>
                <div className={classes.info}>
                    <p className={classes.title}>{book.title}</p>
                    <p className={classes.author}>{book.author}</p>
                    <p className={classes.price}>{book.price} с</p>
                
                </div>
            </div>
        </li>
        </ul> 
    </div>
)
}

export default BookCardVersion1;
