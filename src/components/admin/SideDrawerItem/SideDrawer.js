import { Link } from "react-router-dom"
import classes from './SideDrawer.module.css'

export const SideDrawerItem = (props) => {
    const {
        route_path,
        activeKey,
        isActive,
        route_Activeicon,
        route_icon, 
        route_name, 
        onChangeActiveHandler,
        } = props

    function onClick() {
        onChangeActiveHandler(activeKey)
    }


    return (
        <Link to={route_path}>
            <li className={isActive === activeKey ? classes.liActive : classes.noActive} onClick={onClick}> 
                <img alt='' className={classes.app} src={isActive === activeKey ? route_Activeicon : route_icon}/>
                    <span>{route_name}</span>
            </li>
        </Link>
    )
} 