import classes from './UserList.module.css'
import UserItem from './UserItem/UserItem'

const UserList = ({ userlist }) => {
   return (
      <div>
         <ol className={classes.list}>
            {userlist &&
               userlist !== [] &&
               userlist.map((user) => {
                  return (
                     <UserItem
                        firstName={user.first_name}
                        email={user.email}
                        id={user.id}
                        key={user.id}
                     />
                  )
               })}
         </ol>
      </div>
   )
}

export default UserList
