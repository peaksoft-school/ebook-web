import React, { useState } from 'react'
import classes from './AdminSideDrawer.module.css'
import { ROUTES, NAVICON, SIDE } from '../../utils/constants/constants'
import { NavLink } from 'react-router-dom'
import EBookLogo from '../../components/UI/EBookLogo/EBookLogo'
import { useDispatch } from 'react-redux'
import { BreadCrumbsReducerActions } from '../../store/BreadCrumbsSlice'

const SideDrawer = () => {
    const dispatch = useDispatch()

    const [isActive, setIsActive] = useState(SIDE.App)

    const onClickApplicationHandler = () => {
        setIsActive(SIDE.App)
        dispatch(BreadCrumbsReducerActions.addNewBreadCrumb( {
            id: 0,
            path_name: 'Заявки',
            route: ROUTES.APPLICATIONS,
          }))
    }
    const onClickSellersHandler = () => {
        setIsActive(SIDE.Sell)
        dispatch(BreadCrumbsReducerActions.addNewBreadCrumb( {
            id: 0,
            path_name: 'Продавцы',
            route: ROUTES.SELLERS,
          }))
    }
    const onClickUsersHandler = () => {
        setIsActive(SIDE.User)
        dispatch(BreadCrumbsReducerActions.addNewBreadCrumb( {
            id: 0,
            path_name: 'Users',
            route: ROUTES.USERS,
          }))
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
            <NavLink activeclassName={classes.active} to={ROUTES.APPLICATIONS}>
                <li className={isActive === SIDE.App ? classes.liActive : classes.noActive} onClick={onClickApplicationHandler}> 
                    <img alt='' className={classes.app} src={isActive === SIDE.App ? NAVICON.APPLICATION : NAVICON.APPLICATIONS}/>
                        <span className={classes.list}>Заявки</span>
                </li>
            </NavLink>
            <NavLink activeclassName={classes.active} to={ROUTES.SELLERS}>
                <li className={isActive === SIDE.Sell ? classes.liActive : classes.noActive} onClick={onClickSellersHandler}> 
                    <img alt='' className={classes.sell} src={isActive === SIDE.Sell ? NAVICON.SELLER : NAVICON.SELLERS}/>
                        <span className={classes.list}>Продавцы</span>
                </li>
            </NavLink>
            <NavLink activeclassName={classes.active} to={ROUTES.USERS}>
                <li className={isActive === SIDE.User ? classes.liActive : classes.noActive} onClick={onClickUsersHandler}> 
                    <img alt='' className={classes.user} src={isActive === SIDE.User ? NAVICON.USER : NAVICON.USERS}/>
                        <span className={classes.list}>Пользователи</span>
                </li>
            </NavLink>
            <NavLink activeclassname={classes.active} to={ROUTES.BOOKS}>
                <li className={isActive === SIDE.Books ? classes.liActive : classes.noActive} onClick={onClickBooksHandler}> 
                    <img alt='' className={classes.book} src={isActive === SIDE.Books ? NAVICON.BOOK : NAVICON.BOOKS}/>
                        <span className={classes.list}>Книги</span>
                </li>
            </NavLink>
        </div>
        
    </div>
)
}

export default SideDrawer