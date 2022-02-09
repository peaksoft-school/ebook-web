import classes from './BreadCrumbs.module.css'
import { breadcrumbs } from '../../../utils/constants/breadCrumbsConstans';
import { Link } from 'react-router-dom';

const BreadCrumbs = () => {

  return <div className={classes.containerForLocations}>
    {breadcrumbs && breadcrumbs.map((breadcrumb)=> {
      return breadcrumb.route?
      <Link
      to={breadcrumb.route}>
      <p 
      className={classes.previousLocation}
      >{breadcrumb.route_name} /
      </p>
      </Link>
      :
      <p 
      className={classes.currentLocation}
      >{breadcrumb.route_name}
      </p>
    })}
  </div>;
};

export default BreadCrumbs;
