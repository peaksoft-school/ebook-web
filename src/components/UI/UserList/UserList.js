import classes from './UserList.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserList } from '../../../store/UserListReducer';
import { useEffect } from 'react';

const UserList = () => {
    const userlist = useSelector(state => state.library.userlist);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUserList());
      console.log('sddfsd')
    }, [dispatch]);
  return <div className={classes.box}>
      <div className={classes.containerTitle}>
      <p>№</p>
      <p>ФИО</p>
      <p>Номер телефона</p>
      <p>Почта</p>
      <p>Количество книг</p>
      </div>
      <div className={classes.containerList}>
          <ul>
              {userlist.map((user)=> {
                  return <li key={user.id}>{user.first_name}</li>
              })}
          </ul>
      </div>
  </div>;
};

export default UserList;
