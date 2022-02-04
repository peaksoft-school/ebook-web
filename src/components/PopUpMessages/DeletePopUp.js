import React from 'react';
import classes from './DeletePopUp.module.css'
import {ReactComponent as Edit} from '../../assets/icons/Edit.svg'
import {ReactComponent as Delete} from '../../assets/icons/Delete.svg'

 const DeletePopUp = props => {
  return (
    <div className={classes.container} onClick={props.onEdit}>
        <div className={classes.edit}>
            <Edit/> 
            <p>Редактировать</p>
        </div>
        <hr className={classes.line}/>
        <div className={classes.delete} onClick={props.onDelete}>
           <Delete/>
           <p>Удалить</p>
        </div>
        
    </div>
  );
};

export default DeletePopUp;