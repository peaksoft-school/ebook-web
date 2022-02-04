import classes from './UserTableHeader.module.css'
import UserList from './UserList/UserList';
import { getUsers } from '../../utils/constants/mock-data'

const UserTableHeader = () => {
  let userlist = getUsers()
  return <div className={classes.box}>
      <div className={classes.containerTitle}>
        <p><b>№</b></p>
        <p className={classes.mediumBox}><b>Ф.И.</b></p>
        <p className={classes.mediumAndLongBox}><b>Почта</b></p>
      </div>
      <hr className={classes.line}/>
      <div className={classes.containerList}>
        <UserList userlist={userlist}/>
      </div>
  </div>;
};

export default UserTableHeader;
