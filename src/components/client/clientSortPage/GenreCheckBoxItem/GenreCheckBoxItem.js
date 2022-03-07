// import React, { useState } from 'react'
import classes from './GenreCheckBoxItem.module.css'
import CustomCheckbox from '../../../UI/customCheckbox/CustomCheckbox'

const GenreCheckBoxItem = ({ genre, id, sendRequestGenreById }) => {
   const onChangeCheckBoxValue = (value) => {
      if (value) {
         sendRequestGenreById(id)
      }
   }
   return (
      <div className={classes.container}>
         <CustomCheckbox
            onChangeCheckBoxValue={onChangeCheckBoxValue}
            label={genre.genreName}
            className={classes.check}
         />
      </div>
   )
}

export default GenreCheckBoxItem
