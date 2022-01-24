import classes from './UserList.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserList } from '../../store/UserListReducer';
import { useEffect } from 'react';
import DeleteIcon from '../DeleteIcon/DeleteIcon';

const UserList = () => {
    const userlist = useSelector(state => state.userlist.userlist.data);
    console.log(userlist)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUserList());
    }, [dispatch]);
    function showUserList() {
        if(userlist) {
            return <ol className={classes.list}>
                {userlist.map((user)=> {
                    return <li className={classes.li} key={user.id}>
                        <p className={classes.mediumBoxForFIO}>{user.first_name} {user.last_name}</p>
                        <p className={classes.mediumBox}>{user.email}</p>
                        <p className={classes.mediumBox}>{user.email}</p>
                        <p className={classes.numberOfBooks}>{user.id}</p>
                        <DeleteIcon id={user.id}/>
                    </li>
                })}
            </ol>
        }
     }
  return <div className={classes.box}>
      <div className={classes.containerTitle}>
      <p><b>№</b></p>
      <p className={classes.mediumBoxForFIO}><b>ФИО</b></p>
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
