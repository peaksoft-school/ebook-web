import classes from './UserList.module.css'
import UserItem from './UserItem/UserItem'
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
  </div>;
};

export default UserList;
