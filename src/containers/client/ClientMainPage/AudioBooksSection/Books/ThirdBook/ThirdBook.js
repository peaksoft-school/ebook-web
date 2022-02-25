import classes from './ThirdBook.module.css'

const ThirdBook = ({
   bookImage,
   bookAuthor,
   bookName,
   bookDuration,
   bookPrice,
}) => {
   return (
      <div className={classes.thirdAudioBookContainer}>
         <img className={classes.image} src={bookImage} alt="" />
         <p className={classes.bookName}>{bookName}</p>
         <p className={classes.author}>{bookAuthor}</p>
         <div className={classes.otherInformations}>
            <p className={classes.duration}>{bookDuration}</p>
            <p className={classes.price}>{bookPrice}</p>
         </div>
      </div>
   )
}

export default ThirdBook