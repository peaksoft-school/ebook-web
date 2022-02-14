import { Route, Routes, Navigate } from "react-router";
import { ROUTES } from '../utils/constants/constants' 

export default function AdminPageRoute() {
    return (
        <>
            <Routes>
                <Route path="/admin" element={<Navigate to={ROUTES.APPLICATIONS}/>}/>
                <Route path={ROUTES.APPLICATIONS} element={<h1>App</h1>}/>
                <Route path={ROUTES.SELLERS} element={<h1>Seller</h1>}/>
                <Route path={ROUTES.USERS} element={<h1>Users</h1>}/>
                <Route path={ROUTES.BOOKS} element={<h1>book</h1>}/>
            </Routes>
        </>
    )
}