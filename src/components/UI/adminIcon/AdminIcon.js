import React, { useState } from 'react'
import Admin from '../../../assets/icons/Profile.svg'
import classes from './AdminIcon.module.css'
import WhiteWrapper from '../WhiteWrapper/WhiteWrapper'

const AdminIcon = () => {
   const [state, setState] = useState(false)

   const onChangeHandler = () => {
      setState((prevState) => !prevState)
   }
   return (
      <div
         role="presentation"
         className={classes.admin}
         onClick={onChangeHandler}
      >
         <div className={classes.modal}>
            {state && (
               <WhiteWrapper className={classes.logout}>Выйти</WhiteWrapper>
            )}
         </div>
         <img className={classes.img} src={Admin} alt="" />
         <span className={classes.title}>Administrator</span>
      </div>
   )
}

export default AdminIcon
