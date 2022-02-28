import classes from './TopPartContent.module.css'
import Button from '../../../../components/UI/Button/Button'
import { ReactComponent as GirlSitOnBooksImage } from '../../../../assets/icons/girlSitOnBook.svg'
import { ReactComponent as PortalToBookWorldImage } from '../../../../assets/icons/portalToBookWorld.svg'

const TopPartContent = () => {
   return (
      <div className={classes.topPartContentContentContainer}>
         <div className={classes.textContainer}>
            <PortalToBookWorldImage
               className={classes.portalToBookWorldImage}
            />
            <p className={classes.text}>
               Начните продавать свои книги на eBook
            </p>
            <Button className={classes.button} variant="variantBecomeToSeller">
               Стать продавцом
            </Button>
         </div>
         <GirlSitOnBooksImage className={classes.girlSitOnBooksImage} />
      </div>
   )
}

export default TopPartContent
