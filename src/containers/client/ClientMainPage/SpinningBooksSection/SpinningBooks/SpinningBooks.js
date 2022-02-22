import classes from './SpinningBooks.module.css'

const SpinningBooks = ({ books, counter }) => {
   const checkfirstImage = counter
   const checksecondImage = counter === 2 ? counter - 2 : counter + 1
   const secondPartThirdImage = counter > 0 ? counter - 1 : counter + 2
   const checkThirdImage = counter === 2 ? 1 : secondPartThirdImage

   return (
      <div className={classes.spinningBooks}>
         <img
            className={classes.firstImage}
            src={books[checkfirstImage].imgUrl}
            alt=""
         />
         <div className={classes.secondImageContainer}>
            <img
               className={classes.secondImage}
               src={books[checksecondImage].imgUrl}
               alt=""
            />
            <div>
               <p className={classes.bookName}>
                  {books[checksecondImage].bookName}
               </p>
               <div className={classes.aboutBook}>
                  <p className={classes.bookAuthor}>
                     {books[checksecondImage].bookAuthor}
                  </p>
                  <p className={classes.bookPrice}>
                     {books[checksecondImage].bookPrice}
                  </p>
               </div>
            </div>
         </div>
         <img
            className={classes.thirdImage}
            src={books[checkThirdImage].imgUrl}
            alt=""
         />
      </div>
   )
}

export default SpinningBooks
