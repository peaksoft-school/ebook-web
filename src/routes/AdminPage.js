import { Route, Routes} from "react-router-dom";
import { ROUTES } from '../utils/constants/constants' 
import AddBookForm from "../components/adminAddBook/addBookForm/AddBookForm";
import Users from "../components/Users/Users";
import Sellers from "../components/Sellers/Sellers";
import SellersDetails from "../components/SellersDetails/SellersDetails";
import UserDetails from "../components/UserDetails/UserDetails";

function AdminPageRoute() {
    return (
        <>
            <Routes>
                <Route path={ROUTES.APPLICATIONS} index element={<h1>App</h1>}/>
                <Route path={ROUTES.SELLERS} element={<Sellers/>}/>
                <Route path="/admin/sellers/:sellerId" element={<SellersDetails/>} />
                <Route path={ROUTES.USERS} element={<Users/>}/>
                <Route path='/admin/users/:userId' element={<UserDetails/>} />
                <Route path={ROUTES.BOOKS} element={<AddBookForm/>}/>
            </Routes>
        </>
    )
}

export default AdminPageRoute 