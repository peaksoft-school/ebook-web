import React, { useState } from 'react'
import classes from './InitNav.module.css'
import { NavLink } from 'react-router-dom'
import { ROUTES, NAVICON, SIDE } from '../../utils/constants/constants'

function InitNav() {
    const [isActive, setIsActive] = useState(false)

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
            <ul className={classes.ul}>
                    <NavLink activeClassName={classes.active} to={ROUTES.APPLICATIONS}>
                <li className={isActive === SIDE.App ? classes.liActive : classes.noActive} onClick={onClickApplicationHandler}> 
                    <img alt='' src={isActive === SIDE.App ? NAVICON.APPLICATION : NAVICON.APPLICATIONS}/>
                        Заявки
                </li>
                    </NavLink>
                    <NavLink activeClassName={classes.active} to={ROUTES.SELLERS}>
                <li className={isActive === SIDE.Sell ? classes.liActive : classes.noActive} onClick={onClickSellersHandler}> 
                    <img alt='' src={isActive === SIDE.Sell ? NAVICON.SELLER : NAVICON.SELLERS}/>
                        Продавцы
                </li>
                    </NavLink>
                    <NavLink activeClassName={classes.active} to={ROUTES.USERS}>
                <li className={isActive === SIDE.User ? classes.liActive : classes.noActive} onClick={onClickUsersHandler}> 
                    <img alt='' src={isActive === SIDE.User ? NAVICON.USER : NAVICON.USERS}/>
                        Пользователи
                    </li>
                    </NavLink>
                    <NavLink activeClassName={classes.active} to={ROUTES.BOOKS}>
                <li className={isActive === SIDE.Books ? classes.liActive : classes.noActive} onClick={onClickBooksHandler}> 
                    <img alt='' src={isActive === SIDE.Books ? NAVICON.BOOK : NAVICON.BOOKS}/>
                        Книги
                </li>
                    </NavLink>
            </ul>
    )
}

export default InitNav