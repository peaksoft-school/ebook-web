import classes from './SpinningBooksSection.module.css'
import BlackWrapper from '../../../../components/UI/BlackWrapper/BlackWrapper'
import SpinningBooks from './SpinningBooks/SpinningBooks'
import { ReactComponent as OrangeArrowButton } from '../../../../assets/icons/orangeArrow.svg'

const SpinningBooksSection = ({ topBooks, setTopBooks }) => {
   const moveImageToRight = () => {
      const firstbook = topBooks.shift()
      setTopBooks([...topBooks, firstbook])
   }

   const moveImageToLeft = () => {
      const lastbook = topBooks.pop()
      setTopBooks([lastbook, ...topBooks])
   }

   console.log(topBooks)

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
