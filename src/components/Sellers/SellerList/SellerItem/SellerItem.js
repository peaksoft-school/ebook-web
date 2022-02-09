import classes from './SellerItem.module.css'
import DeleteButton from '../../../UI/DeleteButton/DeleteButton';
import { Link } from 'react-router-dom';
import { updateBreadCrumbs } from '../../../../utils/constants/breadCrumbsConstans';

const SellerItem = (props) => {
    const {
      id,first_name,
      last_name,phone_number,
      email,booksum
    } = props

    const breadcrumbs = [
      {
        route_name: 'Продавцы',
        route: '/admin/sellers'
      },
      {
        route_name: `${first_name} ${last_name}`
      }
    ]

    const senBreadCrumbs =()=> {
      updateBreadCrumbs(breadcrumbs)
    }
    
  return <div className={classes.containerForLi}>
        <Link  
        to={`/admin/sellers/${id}`}
        key={id}
        >
        <li 
        className={classes.li}
        onClick={senBreadCrumbs}
        >
        <p className={classes.mediumBox}>{first_name} {last_name}</p>
        <p className={classes.mediumBox}>{phone_number}</p>
        <p className={classes.mediumBox}>{email}</p>
        <p className={classes.mediumBox}>{booksum}</p>
      </li>
      </Link>
      <DeleteButton full_name={`${first_name} ${last_name}`} id={id}/>
  </div>;
};

export default SellerItem