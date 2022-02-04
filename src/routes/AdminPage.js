import { Route, Routes} from "react-router";
import { ROUTES } from '../utils/constants/constants' 
import UserTableHeader from '../components/UserTableHeader/UserTableHeader'
import UserProfile from "../components/UserProfile/UserProfile";
import SellerTableHeader from "../components/SellerTableHeader/SellerTableHeader";
import SellerProfile from "../components/SellerProfile/SellerProfile";
function AdminPageRoute() {
    return (
        <>
            <Routes>
                <Route path={ROUTES.APPLICATIONS} element={<h1>App</h1>}/>
                <Route path={ROUTES.SELLERS} element={<SellerTableHeader/>}>
                    <Route path=":sellerId" element={<SellerProfile/>} />
                </Route>
                <Route path={ROUTES.USERS} element={<UserTableHeader/>}>
                <Route path=":userId" element={<UserProfile/>} />
                    </Route>
                <Route path={ROUTES.BOOKS} element={<h1>book</h1>}/>
            </Routes>
        </>
    )
}

export default AdminPageRoute 