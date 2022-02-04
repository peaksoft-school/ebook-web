import React from 'react';
import classes from './RejectPopUp.module.css'
import {ReactComponent as Edit} from '../../assets/icons/Edit.svg'
import {ReactComponent as Reject} from '../../assets/icons/Reject.svg'

 const RejectPopUp = props => {
    return (
      <div className={classes.container} onClick={props.onEdit}>
          <div className={classes.edit}>
              <Edit/> 
              <p>Редактировать</p>
          </div>
          <hr className={classes.line}/>
          <div className={classes.delete} onClick={props.onReject}>
             <Reject/>
             <p>Отклонить</p>
          </div>
          
      </div>
    );
  };
  
  export default RejectPopUp