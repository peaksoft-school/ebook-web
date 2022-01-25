import React, { useState } from 'react'
import classes from './InitNav.module.css'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/constants/constants'
import { NAVICON } from '../../utils/constants/constants'

function InitNav() {
    const [isActive, setIsActive] = useState(false)

    const onClickApplicationHandler = () => {
        setIsActive('application')
    }
    const onClickSellersHandler = () => {
        setIsActive('sellers')
    }
    const onClickUsersHandler = () => {
        setIsActive('users')
    }
    const onClickBooksHandler = () => {
        setIsActive('books')
    }
    return (
            <ul className={classes.ul}>
                <NavLink activeClassName={classes.active} to={ROUTES.APPLICATIONS}>
                    <li className={isActive === 'application' ? classes.liActive : classes.noActive} onClick={onClickApplicationHandler}> 
                        <img alt='' src={isActive === 'application' ? NAVICON.APPLICATION : NAVICON.APPLICATIONS}/>
                            Заявки
                    </li>
                </NavLink>
                <NavLink activeClassName={classes.active} to={ROUTES.SELLERS}>
                    <li className={isActive === 'sellers' ? classes.liActive : classes.noActive} onClick={onClickSellersHandler}> 
                        <img alt='' src={isActive === 'sellers' ? NAVICON.SELLER : NAVICON.SELLERS}/>
                            Продавцы
                    </li>
                </NavLink>
                <NavLink activeClassName={classes.active} to={ROUTES.USERS}>
                    <li className={isActive === 'users' ? classes.liActive : classes.noActive} onClick={onClickUsersHandler}> 
                        <img alt='' src={isActive === 'users' ? NAVICON.USER : NAVICON.USERS}/>
                            Пользователи
                    </li>
                </NavLink>
                <NavLink activeClassName={classes.active} to={ROUTES.BOOKS}>
                    <li className={isActive === 'books' ? classes.liActive : classes.noActive} onClick={onClickBooksHandler}> 
                        <img alt='' src={isActive === 'books' ? NAVICON.BOOK : NAVICON.BOOKS}/>
                            Книги
                    </li>
                </NavLink>
            </ul>
    )
}

export default InitNav