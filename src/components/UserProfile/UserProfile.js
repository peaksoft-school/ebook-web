import Button from '../UI/Button/Button'
import classes from './UserProfile.module.css'
import ModalForDelete from '../ModalForDelete/ModalForDelete';
import { useParams } from "react-router-dom";
import { getUser } from '../../utils/constants/mock-data';
import { useState } from 'react';


const UserProfile = () => {
    const [isShowModal,setIsShowModal] = useState(false)

    const params = useParams();
    const person = getUser(parseInt(params.userId, 10))
    
    const showModalForDelete=()=> {
        setIsShowModal(!isShowModal)
    }
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
        <Button onClick={showModalForDelete} variant={"deleteProfile"} >Удалить профиль</Button>
        </div>
        {
        isShowModal 
        && <ModalForDelete
        onCloseModal={showModalForDelete} 
        full_name={`${person.first_name} ${person.last_name}`}
        id={person.id}
        />
        }
  </div>;
};

export default UserProfile;
