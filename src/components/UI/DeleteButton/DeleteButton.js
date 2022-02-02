import classes from './DeleteButton.module.css'
import deleteIcon from '../../../assets/icons/deleteIcon.svg'
import { useState } from 'react';
import ModalForDelete from '../../ModalForDelete/ModalForDelete';

const DeleteButton = (props) => {
  const { full_name, id } = props
  const [isShowModal,setIsShowModal] = useState(false)

  const showModalForDelete=()=> {
    setIsShowModal(!isShowModal)
  }

  return <div onClick={showModalForDelete} className={classes.borderDeleteIcon}>
    <img src={deleteIcon} alt='delete icon' />
    {isShowModal 
    && <ModalForDelete
      onCloseModal={showModalForDelete} 
      full_name={full_name}
      id={id}
      />}
  </div>
};

export default DeleteButton;
