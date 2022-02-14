import classes from './HowToBecomeVendorPageHeader.module.css'
import EBookLogo from '../../../UI/EBookLogo/EBookLogo'
import Button from '../../../UI/Button/Button'

const HowToBecomeVendorPageHeader = () => {
  return <div className={classes.howToBecomeVendorPageHeaderContainer}>
    <EBookLogo/>
    <Button 
    className={classes.buttonSize} 
    variant='tertiary'
    >Личный кабинет
    </Button>
  </div>;
};

export default HowToBecomeVendorPageHeader;
