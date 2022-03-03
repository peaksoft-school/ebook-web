import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants/constants'
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
            <Link to={ROUTES.PROMO_CODE}>
               <p className={classes.linkText}>Промокоды</p>
            </Link>
            <Link to={ROUTES.BECOME_VENDOR}>
               <p className={classes.linkActiveText}>
                  Начать продавать на eBook
               </p>
            </Link>
         </div>
         <Button className={classes.buttonSize}>Войти</Button>
         {isShowGenres && <GengreDropDownList />}
      </div>
   )
}

export default UserNavMenu
