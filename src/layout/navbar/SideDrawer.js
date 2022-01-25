import { Route, Routes, Navigate } from "react-router";
import { ROUTES } from "../../utils/constants/constants"; 
import InitNav from "./InitNav";
import classes from './SideDrawer.module.css'

function SideDrawer() {
    return (
        <div className={classes.navbar}>
            <Routes>
                <Route path="/" element={<Navigate to={ROUTES.APPLICATIONS}/>}/>
                <Route path={ROUTES.APPLICATIONS} element={<InitNav/>}/>
                <Route path={ROUTES.SELLERS} element={<InitNav/>}/>
                <Route path={ROUTES.USERS} element={<InitNav/>}/>
                <Route path={ROUTES.BOOKS} element={<InitNav/>}/>
            </Routes>
        </div>
    )
}

export default SideDrawer