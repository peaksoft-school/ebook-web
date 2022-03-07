import React from 'react'
import { NAVICON } from '../../../../utils/constants/constants'
import CustomCheckbox from '../../../UI/customCheckbox/CustomCheckbox'
import classes from './Languages.module.css'

const LanguagesBook = () => {
   return (
      <div>
         <div className={classes.lang}>
            <span className={classes.lan}>
               Язык издания <img src={NAVICON.ARRDOWN} alt="" />
            </span>
            <div className={classes.lanCheck}>
               <CustomCheckbox
                  label="Кыргызский язык"
                  className={classes.check}
               />
               <CustomCheckbox label="Русский язык" className={classes.check} />
               <CustomCheckbox label="Английский язык" />
            </div>
         </div>
      </div>
   )
}

export default LanguagesBook
