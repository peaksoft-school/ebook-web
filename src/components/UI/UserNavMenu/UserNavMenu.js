import { useState } from 'react'
import classes from './UserNavMenu.module.css'
import GengreDropDownList from './GengreDropDownList/GengreDropDownList'
import { ReactComponent as GenreIcon } from '../../../assets/icons/genreIcon.svg'
import Button from '../Button/Button'

const UserNavMenu = () => {
   const [isShowGenres, setIsShowGenres] = useState(false)

   const showGenres = () => {
      setIsShowGenres((isShowGenres) => !isShowGenres)
   }
   return (
      <div className={classes.userNavMenuContainer}>
         <div
            role="presentation"
            onClick={showGenres}
            className={classes.genreContainer}
         >
            <GenreIcon className={classes.genreIcon} />
            <p>Жанры</p>
         </div>
         <div className={classes.containerForLinks}>
            <p className={classes.linkText}>Электронные книги</p>
            <p className={classes.linkText}>Audio books</p>
            <p className={classes.linkText}>Промокоды</p>
            <p className={classes.linkActiveText}>Начать продавать на eBook</p>
         </div>
         <Button className={classes.buttonSize}>Войти</Button>
         {isShowGenres && <GengreDropDownList />}
      </div>
   )
}

export default UserNavMenu
