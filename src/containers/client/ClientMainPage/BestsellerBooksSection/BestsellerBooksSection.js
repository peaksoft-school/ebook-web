import Button from '../../../../components/UI/Button/Button'
import classes from './BestsellerBooksSection.module.css'

const BestsellerBooksSection = () => {
   return (
      <div className={classes.bestsellerBooksSectionContainer}>
         <div className={classes.sectionTopPart}>
            <h2>Бестселлеры</h2>
            <Button variant="aboutMoreBtn">Смотреть все</Button>
         </div>
      </div>
   )
}

export default BestsellerBooksSection
