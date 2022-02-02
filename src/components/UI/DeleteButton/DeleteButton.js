import classes from './DeleteButton.module.css'
import deleteIcon from '../../../assets/icons/deleteIcon.svg'
import { useState } from 'react';
import ModalForDelete from '../../ModalForDelete/ModalForDelete';

const DeleteButton = (props) => {
  const { full_name, id } = props

  const showModalForDelete=()=> {
    return <ModalForDelete
    ExitHundler={true} 
    full_name={full_name}
    id={id}
    />
  }

  return <div onClick={showModalForDelete} className={classes.borderDeleteIcon}>
    <img src={deleteIcon} alt='delete icon' />
  </div>
};

export default DeleteButton;
