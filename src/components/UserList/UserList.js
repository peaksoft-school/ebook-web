import classes from './UserList.module.css'
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import useHttp from '../../hooks/use-http';
const UserList = () => {
  const config = {
    url:'https://ebook-api-e48c7-default-rtdb.firebaseio.com/users.json',
  }
  const getUserList = useHttp(config)
  console.log(getUserList)

  const userlist = []
  if(getUserList.response !== []){
    for (const key in getUserList.response) {
      for (let i = 0; i < getUserList.response[key].length; i++) {
        const element = getUserList.response[key][i];
        userlist.push({
          id:element.id,
          first_name:element.name,
          last_name:element.last_name,
          phone_number:element.phone_number,
          email:element.email,
          booksum:element.booksum
        })
      }
    }
  }
  console.log(userlist)
    function showUserList() {
        if(userlist) {
            return <ol className={classes.list}>
                {userlist !== [] && userlist.map((user)=> {
                    return <li className={classes.li} key={user.id}>
                        <p className={classes.mediumBoxForFIO}>{user.first_name} {user.last_name}</p>
                        <p className={classes.mediumBox}>{user.phone_number}</p>
                        <p className={classes.mediumBox}>{user.email}</p>
                        <p className={classes.numberOfBooks}>{user.booksum}</p>
                        <DeleteIcon id={user.id}/>
                    </li>
                })}
            </ol>
        }
     }
  return <div className={classes.box}>
      <div className={classes.containerTitle}>
        <p><b>№</b></p>
        <p className={classes.mediumBoxForFIO}><b>Ф.И.</b></p>
        <p className={classes.mediumBox}><b>Номер телефона</b></p>
        <p className={classes.mediumBox}><b>Почта</b></p>
        <p className={classes.mediumBox}><b>Количество книг</b></p>
      </div>
      <hr className={classes.line}/>
      <div className={classes.containerList}>
          {showUserList()}
      </div>
  </div>;
};

export default UserList;
