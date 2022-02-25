import { useState } from 'react'
import classes from './SpinningBooksSection.module.css'
import BlackWrapper from '../../../../components/UI/BlackWrapper/BlackWrapper'
import SpinningBooks from './SpinningBooks/SpinningBooks'
import { ReactComponent as OrangeArrowButton } from '../../../../assets/icons/orangeArrow.svg'
import { books } from '../../../../utils/constants/books'

const SpinningBooksSection = () => {
   const [topBooks, setTopBooks] = useState(books)

   const moveImageToRight = () => {
      const firstbook = topBooks.shift()
      setTopBooks([...topBooks, firstbook])
   }

   const moveImageToLeft = () => {
      const lastbook = topBooks.pop()
      setTopBooks([lastbook, ...topBooks])
   }

   return (
      <BlackWrapper className={classes.spinningBooksSectionContainer}>
         <div className={classes.spinningBooksSectionContent}>
            <OrangeArrowButton
               onClick={moveImageToLeft}
               className={classes.orangeArrowLeft}
            />
            <SpinningBooks books={topBooks} />
            <OrangeArrowButton
               onClick={moveImageToRight}
               className={classes.orangeArrowRight}
            />
         </div>
      </BlackWrapper>
   )
}

export default SpinningBooksSection
