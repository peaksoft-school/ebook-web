import classes from './BreadCrumbs.module.css'
import { useNavigate } from 'react-router-dom';

const BreadCrumbs = (props) => {
  const {
    currentLocation,
    previousLocation,
    previousPreviousLocation
  } = props

  const navigate = useNavigate()

  const goToPreviosPage =()=> navigate(-1)
  const goToPreviosPreviosPage =()=> navigate(-2)
  
  return <div className={classes.containerForLocations}>
    {
      previousPreviousLocation 
      && <p className={classes.previousPreviousLocation}
      onClick={goToPreviosPreviosPage}
      >{previousPreviousLocation} /
      </p>
    }
    <p 
    className={classes.previousLocation}
    onClick={goToPreviosPage}
    >{previousLocation} /
    </p>
    <p 
    className={classes.currentLocation}
    > {currentLocation}
    </p>
  </div>;
};

export default BreadCrumbs;
