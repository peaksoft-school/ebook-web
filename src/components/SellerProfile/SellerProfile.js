import Button from '../UI/Button/Button'
import classes from './SellerProfile.module.css'
import { getSeller } from '../../utils/constants/mock-data';

const SellerProfile = () => {
    const person = getSeller(1)
    
  return <div className={classes.profileContainer}>
      <div className={classes.informationContainer}>
         <div className={classes.smallBox}>
            <p className={classes.title}>Имя</p>
            <p>{person.first_name}</p>
        </div>
        <div className={classes.smallBox}>
            <p className={classes.title}>Фамилия</p>
            <p>{person.last_name}</p>
        </div>
        <div className={classes.smallBox}>
            <p className={classes.title}>Номер телефона</p>
            <p>{person.number}</p>
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

export default SellerProfile;
