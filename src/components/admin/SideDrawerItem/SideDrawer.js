import { Link } from 'react-router-dom'
import classes from './SideDrawer.module.css'

export const SideDrawerItem = (props) => {
   const {
      routePath,
      activeKey,
      isActive,
      routeActiveicon,
      routeIcon,
      routeName,
      onChangeHandler,
   } = props

   function onClick() {
      onChangeHandler(activeKey)
   }

   return (
      <Link to={routePath}>
         <li
            role="presentation"
            className={
               isActive === activeKey ? classes.liActive : classes.noActive
            }
            onClick={onClick}
         >
            <img
               alt=""
               className={classes.app}
               src={isActive === activeKey ? routeActiveicon : routeIcon}
            />
            <span>{routeName}</span>
         </li>
      </Link>
   )
}
