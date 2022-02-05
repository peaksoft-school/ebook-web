import classes from './UserItem.module.css'
import DeleteButton from '../../../UI/DeleteButton/DeleteButton';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
    const {id,first_name,email} = props

  return <div className={classes.containerLiFor} >
        <Link 
        to={`/admin/users/${id}`}
        >
        <li className={classes.li}>
            <p className={classes.mediumBox}>{first_name}</p>
            <p className={classes.mediumBox}>{email}</p>
        </li>
        </Link>
        <DeleteButton full_name={`${first_name}`} id={id}/>
  </div>;
};

export default UserItem;
