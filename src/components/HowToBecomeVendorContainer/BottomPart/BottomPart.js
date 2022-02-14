import classes from './BottomPart.module.css'
import StartSection from './StartSection/StartSection';
import Conditions from './Conditions/Conditions';
import Button from '../../UI/Button/Button'

const BottomPart = () => {
  return <div className={classes.bottomPartContainer}>
    <StartSection/>
    <Conditions/>
    <div className={classes.containerForButton}>
      <Button 
      className={classes.button} 
      variant='variantBecomeToSeller'
      >Стать продавцом
      </Button>
    </div>
  </div>;
};

export default BottomPart;
