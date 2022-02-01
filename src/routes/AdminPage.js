import { Route, Routes, Navigate } from "react-router";
import { ROUTES } from '../utils/constants/constants' 
import UserTableHeader from '../components/UserTableHeader/UserTableHeader'
function AdminPageRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={ROUTES.APPLICATIONS}/>}/>
                <Route path={ROUTES.APPLICATIONS} element={<h1>App</h1>}/>
                <Route path={ROUTES.SELLERS} element={<UserTableHeader/>}/>
                <Route path={ROUTES.USERS} element={<UserTableHeader/>}/>
                <Route path={ROUTES.BOOKS} element={<h1>book</h1>}/>
            </Routes>
        </>
    )
}

export default AdminPageRoute 