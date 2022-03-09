import classes from './InformationInCardApplicationBook.module.css'

const InformationInCardApplicationBook = ({ bookName, date, netPrice }) => {
   return (
      <div className={classes.info}>
         <div>
            <p className={classes.title}>{bookName}</p>
            <p className={classes.date}>{date}</p>
         </div>
         <div className={classes.pricel}>
            <p className={classes.price}>{netPrice} С</p>
         </div>
      </div>
   )
}

export default InformationInCardApplicationBook
