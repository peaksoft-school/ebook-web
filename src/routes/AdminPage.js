import { Route, Routes, Navigate } from "react-router";
// import AddBookForm from "../components/adminAddBook/addBookForm/AddBookForm";
import BooksCratLayout from "../components/adminsBookCrat/BooksCrat";
import { ROUTES } from '../utils/constants/constants' 

function AdminPageRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate replace to={ROUTES.APPLICATIONS}/>}/>
                <Route path={ROUTES.APPLICATIONS} element={<h1>App</h1>}/>
                <Route path={ROUTES.SELLERS} element={<h1>Seller</h1>}/>
                <Route path={ROUTES.USERS} element={<h1>Users</h1>}/>
                <Route path={ROUTES.BOOKS} element={<BooksCratLayout/>}/>
            </Routes>
        </>
    )
}

export default AdminPageRoute 