import { useEffect, useState } from 'react'

import classes from './SpinningBooks.module.css'

const SpinningBooks = ({ books, counter, moving }) => {
   const [checkfirstImage, setCheckFirstImage] = useState(counter)
   const [checksecondImage, setChecksecondImage] = useState(counter + 1)
   const [checkThirdImage, setCheckThirdImage] = useState(counter + 2)

   useEffect(() => {
      setTimeout(() => {
         setCheckFirstImage(counter)
         setChecksecondImage(counter === 2 ? counter - 2 : counter + 1)
         const secondPartThirdImage = counter > 0 ? counter - 1 : counter + 2
         setCheckThirdImage(counter === 2 ? 1 : secondPartThirdImage)
      }, 2250)
   }, [moving])

   const secondImageContainer =
      moving === 'right'
         ? classes.secondImageContainerToRight
         : classes.secondImageContainer

   const firstImage =
      moving === 'right' ? classes.firstImageRight : classes.firstImage
   const secondImage =
      moving === 'right' ? classes.secondImageRight : classes.secondImage

   const thirdImage =
      moving === 'right' ? classes.thirdImageRight : classes.thirdImage

   return (
      <div className={classes.spinningBooks}>
         <img
            className={firstImage}
            src={books[checkfirstImage].imgUrl}
            alt=""
         />
         <div className={secondImageContainer}>
            <img
               className={secondImage}
               src={books[checksecondImage].imgUrl}
               alt=""
            />
            {moving === 'right' ? (
               ''
            ) : (
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
            )}
         </div>
         <img
            className={thirdImage}
            src={books[checkThirdImage].imgUrl}
            alt=""
         />
      </div>
   )
}

export default SpinningBooks
