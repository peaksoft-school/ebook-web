import classes from './FirstBook.module.css'

const FirstBook = ({
   bookImage,
   bookAuthor,
   bookName,
   bookDuration,
   bookPrice,
}) => {
   return (
      <div className={classes.firstAudioBookContainer}>
         <img className={classes.image} src={bookImage} alt="" />
         <p className={classes.bookName}>{bookName}</p>
         <p className={classes.author}>{bookAuthor}</p>
         <div className={classes.otherInformations}>
            <p className={classes.duration}>{bookDuration}</p>
            <p className={classes.price}>{bookPrice} C</p>
         </div>
      </div>
   )
}

export default FirstBook
