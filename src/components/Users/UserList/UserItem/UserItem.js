import classes from './UserItem.module.css'
import DeleteButton from '../../../UI/DeleteButton/DeleteButton';
import { Link } from 'react-router-dom';
import { updateBreadCrumbs } from '../../../../utils/constants/breadCrumbsConstans';
const UserItem = (props) => {
    const {id,
      first_name,
      email
    } = props;

    const breadcrumbs = [
      {
        route_name: 'Пользователи',
        route: '/admin/users'
      },
      {
        route_name: first_name
      }
    ]

    const senBreadCrumbs =()=> {
      updateBreadCrumbs(breadcrumbs)
    }

    return <div className={classes.containerLiFor}>
        <Link 
        to={`/admin/users/${id}`}
        >
          <li 
          className={classes.li}
          onClick={senBreadCrumbs}
          >
              <p className={classes.mediumBox}>{first_name}</p>
              <p className={classes.mediumBox}>{email}</p>
          </li>
        </Link>
        <DeleteButton full_name={`${first_name}`} id={id}/>
    </div>;
};

export default UserItem;
