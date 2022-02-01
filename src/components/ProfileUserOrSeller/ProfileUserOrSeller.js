import Button from '../UI/Button/Button'
import classes from './ProfileUserOrSeller.module.css'

const ProfileUserOrSeller = () => {
    const person = {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        'number':'+996705889125',
        "data_redistration":"03.06.2005"
    }
    
    const showAdditionalInformation=()=> {
        if(person.last_name && person.number) {
            return <>
                <div className={classes.smallBox}>
                    <p className={classes.title}>Фамилия</p>
                    <p>{person.last_name}</p>
                </div>
                <div className={classes.smallBox}>
                    <p className={classes.title}>Номер телефона</p>
                    <p>{person.number}</p>
                </div>
            </>
        } else if(person.last_name === '' && person.number === '') {
            return ''
        }
    }
    
  return <div className={classes.profileContainer}>
      <div className={classes.informationContainer}>
         <div className={classes.smallBox}>
            <p className={classes.title}>Имя</p>
            <p>{person.first_name}</p>
        </div>
        {showAdditionalInformation()}
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

export default ProfileUserOrSeller;
