import React, { useState } from 'react'
import classes from './SideDrawer.module.css'
import {  NAVICON, SIDE } from '../../utils/constants/constants'

function SideDrawer() {
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
            <ul className={classes.ul}>
                <li className={isActive === SIDE.App ? classes.liActive : classes.noActive} onClick={onClickApplicationHandler}> 
                    <img alt='' src={isActive === SIDE.App ? NAVICON.APPLICATION : NAVICON.APPLICATIONS}/>Заявки
                </li>
                <li className={isActive === SIDE.Sell ? classes.liActive : classes.noActive} onClick={onClickSellersHandler}> 
                    <img alt='' src={isActive === SIDE.Sell ? NAVICON.SELLER : NAVICON.SELLERS}/>Продавцы
                </li>
                <li className={isActive === SIDE.User ? classes.liActive : classes.noActive} onClick={onClickUsersHandler}> 
                    <img alt='' src={isActive === SIDE.User ? NAVICON.USER : NAVICON.USERS}/>Пользователи
                </li>
                <li className={isActive === SIDE.Books ? classes.liActive : classes.noActive} onClick={onClickBooksHandler}> 
                    <img alt='' src={isActive === SIDE.Books ? NAVICON.BOOK : NAVICON.BOOKS}/>Книги
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer