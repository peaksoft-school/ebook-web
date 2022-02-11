import React, { useState } from 'react'
import classes from './AdminSideDrawer.module.css'
import { ROUTES } from '../../utils/constants/constants'
import { SideDrawerItem } from './SideDrawerItem/SideDrawer'
import EBookLogo from '../../components/UI/EBookLogo/EBookLogo'

const SideDrawer = () => {
    const [isActive, setIsActive] = useState('application')

    const onChangeActiveHandler = (activeKey) => {
        setIsActive(activeKey)
    }

return (
    <div className={classes.container}>
        <div className={classes.containerForEbookLogo}>
            <EBookLogo/>
        </div>
        <div className={classes.ul}>
                {ROUTES.SIDEDRAWERDATA.map((item) => 
                <SideDrawerItem 
                key={item.route_name}
                activeKey={item.activeKey}
                isActive={isActive}
                route_name={item.route_name}
                route_path={item.route_path}
                onChangeHandler={onChangeActiveHandler}
                route_Activeicon={item.route_Activeicon}
                route_icon={item.route_icon}
                />
            ) }
        </div>
        
    </div>
)
}

export default SideDrawer