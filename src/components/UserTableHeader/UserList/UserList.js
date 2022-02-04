import classes from './UserList.module.css'
import UserItem from './UserItem/UserItem'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const UserList = ({userlist}) => {
  return <div>
        {
        userlist && <ol className={classes.list}>
            {userlist !== [] && userlist.map((user)=> {
                return <UserItem
                  key={user.id} 
                  first_name={user.first_name}
                  email={user.email}
                  />
            })}
        </ol>
        }
    <Outlet />
  </div>;
};

export default UserList;
