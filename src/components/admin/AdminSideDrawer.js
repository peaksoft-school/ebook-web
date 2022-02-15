import React, { useState } from 'react'
import classes from './AdminSideDrawer.module.css'
import { ROUTES } from '../../utils/constants/constants'
import { SideDrawerItem } from './SideDrawerItem/SideDrawer'
import EBookLogo from '../UI/EBookLogo/EBookLogo'

const SideDrawer = () => {
   const [isActive, setIsActive] = useState('application')

   const onChangeActiveHandler = (activeKey) => {
      setIsActive(activeKey)
   }

   return (
      <div className={classes.container}>
         <div className={classes.containerForEbookLogo}>
            <EBookLogo />
         </div>
         <div className={classes.ul}>
            {ROUTES.SIDE_DRAWER_DATA.map((item) => (
               <SideDrawerItem
                  key={item.route_name}
                  activeKey={item.activeKey}
                  isActive={isActive}
                  routeName={item.route_name}
                  routePath={item.route_path}
                  onChangeHandler={onChangeActiveHandler}
                  routeActiveicon={item.route_Activeicon}
                  routeIcon={item.route_icon}
               />
            ))}
         </div>
      </div>
   )
}

export default SideDrawer
