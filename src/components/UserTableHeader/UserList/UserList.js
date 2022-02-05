import classes from './UserList.module.css'
import UserItem from './UserItem/UserItem'

const UserList = ({userlist}) => {
  return <div>
        {
        userlist && <ol className={classes.list}>
            {userlist !== [] && userlist.map((user)=> {
                return <UserItem 
                  first_name={user.first_name}
                  email={user.email}
                  id={user.id}
                  key={user.id}
                  />
            })}
        </ol>
        }
  </div>;
};

export default UserList;
