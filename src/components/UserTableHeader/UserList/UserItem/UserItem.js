import classes from './UserItem.module.css'
import DeleteButton from '../../../UI/DeleteButton/DeleteButton';

const UserItem = (props) => {
    const {
      id,
      first_name,
      email
    } = props

  return <div>
        <li className={classes.li}>
            <p className={classes.mediumBox}>{first_name}</p>
            <p className={classes.mediumAndLongBox}>{email}</p>
            <DeleteButton full_name={`${first_name}`} id={id}/>
        </li>
  </div>;
};

export default UserItem;
