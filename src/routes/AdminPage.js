import { Route, Routes} from "react-router-dom";
import { ROUTES } from '../utils/constants/constants' 
import AddBookForm from "../components/adminAddBook/addBookForm/AddBookForm";
import Users from "../components/Users/Users";
import Sellers from "../components/Sellers/Sellers";
import SellersDetails from "../components/SellersDetails/SellersDetails";
import UserDetails from "../components/UserDetails/UserDetails";

export default function AdminPageRoute() {
    return (
        <>
            <Routes>
                <Route path={ROUTES.APPLICATIONS} index element={<h1>App</h1>}/>
                <Route path={ROUTES.SELLERS} element={<Sellers/>}/>
                <Route path={ROUTES.SEllERBYID} element={<SellersDetails/>} />
                <Route path={ROUTES.USERS} element={<Users/>}/>
                <Route path={ROUTES.USERBYID} element={<UserDetails/>} />
                <Route path={ROUTES.BOOKS} element={<AddBookForm/>}/>
            </Routes>
        </>
    )
}