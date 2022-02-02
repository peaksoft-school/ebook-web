import classes from './UserItem.module.css'
import DeleteButton from '../../../UI/DeleteButton/DeleteButton';

const UserItem = (props) => {
    const {id,first_name,last_name,phone_number,email,booksum} = props

  return <div>
        <li className={classes.li}>
            <p className={classes.mediumAndLongBox}>{first_name} {last_name}</p>
            <p className={classes.mediumBox}>{phone_number}</p>
            <p className={classes.mediumAndLongBox}>{email}</p>
            <p className={classes.mediumBox}>{booksum}</p>
            <DeleteButton id={id}/>
        </li>
  </div>;
};

export default UserItem;
