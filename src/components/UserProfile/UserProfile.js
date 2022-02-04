import Button from '../UI/Button/Button'
import classes from './UserProfile.module.css'
import { getUser } from '../../utils/constants/mock-data';

const UserProfile = () => {
    const person = getUser(1)
    
  return <div className={classes.profileContainer}>
      <div className={classes.informationContainer}>
         <div className={classes.smallBox}>
            <p className={classes.title}>Имя</p>
            <p>{person.first_name}</p>
        </div>
        <div className={classes.smallBox}>
            <p className={classes.title}>Email</p>
            <p>{person.email}</p>
        </div>
        <div className={classes.smallBox}>
            <p className={classes.title}>Дата регистрации</p>
            <p>{person.data_redistration}</p>
        </div>
        <div className={classes.smallAutoBox}></div>
        </div>
        <div className={classes.deleteContainer}>
        <Button variant={"deleteProfile"} >Удалить профиль</Button>
        </div>
  </div>;
};

export default UserProfile;
