import classes from './DeleteProfile.module.css'

const DeleteProfile = () => {
  return <div className={classes.profileContainer}>
      <div className={classes.informationContainer}>
         <div className={classes.smallBox}>
            <p className={classes.title}>Имя</p>
            <p>Байболот</p>
        </div>
        <div className={classes.smallBox}>
            <p className={classes.title}>Фамилия</p>
            <p>Жаныбеков</p>
        </div>
        <div className={classes.smallBox}>
            <p className={classes.title}>Номер телефона</p>
            <p>+996889125</p>
        </div>
        <div className={classes.smallBox}>
            <p className={classes.title}>Email</p>
            <p>ieye7531@gmail.com</p>
        </div>
        <div className={classes.smallBox}>
            <p className={classes.title}>Дата регистрации</p>
            <p>21 май 2019</p>
        </div>
        </div>
        <button className={classes.deleteBtn}>delete</button>
  </div>;
};

export default DeleteProfile;
