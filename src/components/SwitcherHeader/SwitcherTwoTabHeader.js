import React, { useState } from "react"
import classes from './SwitcherTwoTabHeader.module.css'
import { TAB } from "../../utils/constants/consts"
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/constants/consts'

const SwitcherTwoTabHeader = (props) => {
    const [isActive, setIsActive] = useState(false)

    const onClickProfileHandler = () => {
        setIsActive(TAB.Prof)
    }
    const onClickDataHandler = () => {
        setIsActive(TAB.Data)
    }
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li className={isActive  === TAB.Prof ? classes.liActive : classes.noActive}>
                        <NavLink className={isActive  === TAB.Prof ? classes.aActive : classes.noActive} onClick={onClickProfileHandler} to={ROUTES.FIRST}>Профиль</NavLink>
                    </li>
                    <li className={isActive  === TAB.Data ? classes.liActive : classes.noActive}>
                        <NavLink className={isActive  === TAB.Data ? classes.aActive : classes.noActive} onClick={onClickDataHandler} to={ROUTES.SECOND}>{props.children}</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default SwitcherTwoTabHeader