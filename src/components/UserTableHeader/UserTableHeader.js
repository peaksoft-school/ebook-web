import classes from './UserTableHeader.module.css'
import UserList from './UserList/UserList';
import { userlist } from '../../utils/constants/mock-data';
import Button from '../UI/Button/Button';

const UserTableHeader = () => {
  return <div className={classes.box}>
      <div className={classes.containerTitle}>
        <p><b>№</b></p>
        <p className={classes.mediumAndLongBox}><b>Ф.И.</b></p>
        <p className={classes.mediumBox}><b>Номер телефона</b></p>
        <p className={classes.mediumAndLongBox}><b>Почта</b></p>
        <p className={classes.mediumBox}><b>Количество книг</b></p>
      </div>
      <hr className={classes.line}/>
      <div className={classes.containerList}>
        <UserList userlist={userlist}/>
      </div>
  </div>;
};

export default UserTableHeader;
