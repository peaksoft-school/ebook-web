import classes from './UserList.module.css'
import UserItem from './UserItem/UserItem'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const UserList = ({userlist}) => {
  return <div>
        {
        userlist && <ol className={classes.list}>
            {userlist !== [] && userlist.map((user)=> {
                return <Link 
                to={`/admin/users/${user.id}`}
                key={user.id}
                >
                  <UserItem 
                  first_name={user.first_name}
                  email={user.email}
                  />
                </Link>
            })}
        </ol>
        }
    <Outlet />
  </div>;
};

export default UserList;
