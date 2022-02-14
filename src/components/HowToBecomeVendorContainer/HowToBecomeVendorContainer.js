import classes from './HowToBecomeVendorContainer.module.css'
import TopPart from './TopPart/TopPart'
import BottomPart from './BottomPart/BottomPart';
import VendorFooter from '../../layout/VendorFooter/VendorFooter';

const HowToBecomeVendorContainer = () => {
  return <div className={classes.howToBecomeVendorContainerWrapper}>
      <div className={classes.howToBecomeVendorContainer}>
      <TopPart/>
      <BottomPart/>
    </div>;
    <VendorFooter/>
  </div>
};

export default HowToBecomeVendorContainer;
