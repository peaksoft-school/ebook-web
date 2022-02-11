import classes from './TopPartBookPage.module.css'
import ContainerForBriefInformation from './ContainerForBriefInformation/ContainerForBriefInformation';
import SmallContainer from './SmallContainer/SmallContainer';
import Button from '../../UI/Button/Button';

const TopPartBookPage = ({booklist}) => {
    return <div className={classes.meddiumContainer}>
        <img 
        className={classes.firstImage} 
        src={booklist.firstImage} 
        alt='some images'/>
        <img 
        className={classes.secondImage} 
        src={booklist.secondImage} 
        alt='some images'/>
        <div className={classes.containerForInformation}>
            <h1 className={classes.title}>{booklist.book_name}</h1>
            <SmallContainer booklist={booklist}/>
            <ContainerForBriefInformation booklist={booklist}/>
            <div className={classes.containerForBtn}>
                <Button 
                variant={'light'} 
                className={classes.button}
                >Отклонить
                </Button>
                <Button 
                variant={'secondary'} 
                className={classes.button}
                >Принять
                </Button>
            </div>
        </div>
    </div>
};

export default TopPartBookPage;
