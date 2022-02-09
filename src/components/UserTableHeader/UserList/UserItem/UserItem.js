import classes from './UserItem.module.css'
import DeleteButton from '../../../UI/DeleteButton/DeleteButton';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BreadCrumbsReducerActions } from '../../../../store/BreadCrumbsSlice';

const UserItem = (props) => {
    const {id,
      first_name,
      email
    } = props;
    const count = useSelector(state => state.bread.count)
    const dispatch = useDispatch()

  return <div className={classes.containerLiFor} >
        <Link 
        to={`/admin/users/${id}`}
        onClick={()=> {
          dispatch(BreadCrumbsReducerActions.addBreadCrumb({
            id: count,
            path_name: first_name,
            route : `/admin/users/${id}`
          }))
        }} 
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
