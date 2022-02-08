import React from "react";
import classes from './Tabs.module.css'
import Button from "../Button/Button";

export const Tab = ({ label, mainf, IsActive}) => {
    const fuunc = () => {
        mainf(label)
    }

    return (
        <Button
            variant={IsActive === label ? 'btnActive' : 'tabSwitcher'}
            className={classes.tab}
            onClick={fuunc}
        >
        {label}</Button>
    )
}

export const Tabs = ({children}) => {
    return (
        <div className={classes.tabs}>{children}</div>
    )
}

export const TabPanel = ({children, check, value}) => {
    function de() {
        if(check === value) {
            return children
        }
    }
    return  <div>
                {de()}
            </div>
}