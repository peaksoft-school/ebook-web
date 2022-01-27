import React, { useState } from "react"
import classes from './SwitcherTwoTabHeader.module.css'
import { TAB } from "../../utils/constants/consts"

const SwitcherTwoTabHeader = (props) => {
    const [isActive, setIsActive] = useState(TAB.Prof)

    const onClickProfileHandler = () => {
        setIsActive(TAB.Prof)
    }
    const onClickDataHandler = () => {
        setIsActive(TAB.Data)
    }
    return  <div>
                <header className={classes.header}>
                    <nav>
                        <ul>
                            <li className={isActive  === TAB.Prof ? classes.liActive : classes.noActive}>
                                <span className={isActive  === TAB.Prof ? classes.aActive : classes.noActive} onClick={onClickProfileHandler}>Профиль</span>
                            </li> 
                            <li className={isActive  === TAB.Data ? classes.liActive : classes.noActive}>
                                <span className={isActive  === TAB.Data ? classes.aActive : classes.noActive} onClick={onClickDataHandler} >{props.children}</span>
                            </li>
                        </ul>
                    </nav>
                </header>
            {isActive === TAB.Prof && <span>PROF</span>}
            {isActive === TAB.Data && <span>history</span>}
        </div>
}

export default SwitcherTwoTabHeader