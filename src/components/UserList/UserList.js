import classes from './UserList.module.css'
import DeleteButton from '../UI/DeleteIcon/DeleteButton';
import { userlist } from '../../utils/constants/constants';

const UserList = () => {
  return <div>
        {
        userlist && <ol className={classes.list}>
            {userlist !== [] && userlist.map((user)=> {
                return <li className={classes.li} key={user.id}>
                    <p className={classes.mediumBoxForFIO}>{user.first_name} {user.last_name}</p>
                    <p className={classes.mediumBox}>{user.phone_number}</p>
                    <p className={classes.mediumBox}>{user.email}</p>
                    <p className={classes.numberOfBooks}>{user.booksum}</p>
                    <DeleteButton id={user.id}/>
                </li>
            })}
        </ol>
        }
  </div>;
};

export default UserList;
