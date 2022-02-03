import React, { useState } from 'react'
import classes from './AdminSideDrawer.module.css'
import { ROUTES, NAVICON, SIDE } from '../../utils/constants/constants'
import { Link } from 'react-router-dom'
import EBookLogo from '../../components/UI/EBookLogo/EBookLogo'

const SideDrawer = () => {
    const [isActive, setIsActive] = useState(SIDE.App)

    const onClickApplicationHandler = () => {
        setIsActive(SIDE.App)
    }
    const onClickSellersHandler = () => {
        setIsActive(SIDE.Sell)
    }
    const onClickUsersHandler = () => {
        setIsActive(SIDE.User)
    }
    const onClickBooksHandler = () => {
        setIsActive(SIDE.Books)
    }

return (
    <div className={classes.container}>
        <div className={classes.containerForEbookLogo}>
            <EBookLogo/>
        </div>
        <div className={classes.ul}>
            <Link to={ROUTES.APPLICATIONS}>
                <li className={isActive === SIDE.App ? classes.liActive : classes.noActive} onClick={onClickApplicationHandler}> 
                    <img alt='' className={classes.app} src={isActive === SIDE.App ? NAVICON.APPLICATION : NAVICON.APPLICATIONS}/>
                        <span className={classes.list}>Заявки</span>
                </li>
            </Link>
            <Link to={ROUTES.SELLERS}>
                <li className={isActive === SIDE.Sell ? classes.liActive : classes.noActive} onClick={onClickSellersHandler}> 
                    <img alt='' className={classes.sell} src={isActive === SIDE.Sell ? NAVICON.SELLER : NAVICON.SELLERS}/>
                        <span className={classes.list}>Продавцы</span>
                </li>
            </Link>
            <Link to={ROUTES.USERS}>
                <li className={isActive === SIDE.User ? classes.liActive : classes.noActive} onClick={onClickUsersHandler}> 
                    <img alt='' className={classes.user} src={isActive === SIDE.User ? NAVICON.USER : NAVICON.USERS}/>
                        <span className={classes.list}>Пользователи</span>
                </li>
            </Link>
            <Link to={ROUTES.BOOKS}>
                <li className={isActive === SIDE.Books ? classes.liActive : classes.noActive} onClick={onClickBooksHandler}> 
                    <img alt='' className={classes.book} src={isActive === SIDE.Books ? NAVICON.BOOK : NAVICON.BOOKS}/>
                        <span className={classes.list}>Книги</span>
                </li>
            </Link>
        </div>
        
    </div>
)
}

export default SideDrawer