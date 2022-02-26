import classes from './TopPartBookPage.module.css'
import ContainerForBriefInformation from './ContainerForBriefInformation/ContainerForBriefInformation'
import SmallContainer from './SmallContainer/SmallContainer'
import Buttons from './Buttons/Buttons'

const TopPartBookPage = ({ booklist }) => {
   return (
      <div className={classes.meddiumContainer}>
         <img
            className={classes.firstImage}
            src={booklist.firstImage}
            alt="some images"
         />
         <img
            className={classes.secondImage}
            src={booklist.secondImage}
            alt="some images"
         />
         <div className={classes.containerForInformation}>
            <h1 className={classes.title}>{booklist.book_name}</h1>
            <SmallContainer booklist={booklist} />
            <ContainerForBriefInformation booklist={booklist} />
            <Buttons bookName={booklist.book_name} />
         </div>
      </div>
   )
}

export default TopPartBookPage
