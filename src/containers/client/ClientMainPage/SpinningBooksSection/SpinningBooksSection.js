import { useState } from 'react'
import classes from './SpinningBooksSection.module.css'
import BlackWrapper from '../../../../components/UI/BlackWrapper/BlackWrapper'
import SpinningBooks from './SpinningBooks/SpinningBooks'
import { ReactComponent as OrangeArrowButton } from '../../../../assets/icons/orangeArrow.svg'
import { books } from '../../../../utils/constants/books'

const SpinningBooksSection = () => {
   const [counter, setCounter] = useState(0)

   const moveImageToRight = () => {
      if (counter === 0) {
         setCounter(2)
      } else if (counter > 0) {
         setCounter((counter) => counter - 1)
      }
   }

   const moveImageToLeft = () => {
      if (counter < 2) {
         setCounter((counter) => counter + 1)
      } else if (counter === 2) {
         setCounter(0)
      }
   }

   return (
      <BlackWrapper className={classes.spinningBooksSectionContainer}>
         <div className={classes.spinningBooksSectionContent}>
            <OrangeArrowButton
               onClick={moveImageToLeft}
               className={classes.orangeArrowLeft}
            />
            <SpinningBooks books={books} counter={counter} />
            <OrangeArrowButton
               onClick={moveImageToRight}
               className={classes.orangeArrowRight}
            />
         </div>
      </BlackWrapper>
   )
}

export default SpinningBooksSection
