import classes from './SpinningBooks.module.css'

const SpinningBooks = ({ books }) => {
   return (
      <div className={classes.spinningBooks}>
         <img className={classes.firstImage} src={books[0].imgUrl} alt="" />
         <div className={classes.secondImageContainer}>
            <img className={classes.secondImage} src={books[1].imgUrl} alt="" />
            <div>
               <p className={classes.bookName}>{books[1].bookName}</p>
               <div className={classes.aboutBook}>
                  <p className={classes.bookAuthor}>{books[1].bookAuthor}</p>
                  <p className={classes.bookPrice}>{books[1].bookPrice}</p>
               </div>
            </div>
         </div>
         <img className={classes.thirdImage} src={books[2].imgUrl} alt="" />
      </div>
   )
}

export default SpinningBooks
