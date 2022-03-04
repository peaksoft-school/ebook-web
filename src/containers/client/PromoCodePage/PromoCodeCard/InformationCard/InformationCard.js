import classes from './InformationInCard.module.css'

const InformationInCard = ({
   bookName,
   bookAuthor,
   discount,
   pastPrice,
   bookPrice,
}) => {
   return (
      <div className={classes.info}>
         <div>
            <span className={classes.title}>{bookName}</span>
            <p className={classes.bookAuthor}>{bookAuthor}</p>
         </div>
         <div className={classes.price}>
            <p className={classes.discount}>{discount}</p>
            <p className={classes.pastPrice}>{pastPrice}</p>
            <p className={classes.bookPrice}>{bookPrice}</p>
         </div>
      </div>
   )
}

export default InformationInCard
