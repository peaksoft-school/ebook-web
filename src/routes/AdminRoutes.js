import { Navigate, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../utils/constants/constants'
import AddBookForm from '../containers/admin/adminAddBook/addBookForm/AddBookForm'
import Users from '../containers/admin/Users/Users'
import Sellers from '../containers/admin/Sellers/Sellers'
import SellersDetails from '../containers/admin/SellersDetails/SellersDetails'
import AdminLayout from '../components/admin/AdminLayout/AdminLayout'
import UserDetails from '../containers/admin/UserDetails/UserDetails'
import AuthModal from '../components/auth/authModal/AuthModal'
import PrivateRouteForAdmin from '../components/UI/PrivateRoutes/PrivateRouteForAdmin/PrivateRouteForAdmin'

function AdminRoutes() {
   return (
      <Routes>
         <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
         <Route path={ROUTES.LOGIN} element={<AuthModal />} />
         <Route
            path={ROUTES.HOME}
            element={
               <PrivateRouteForAdmin>
                  <AdminLayout />
               </PrivateRouteForAdmin>
            }
         >
            <Route
               path={ROUTES.APPLICATIONS}
               element={
                  <PrivateRouteForAdmin>
                     <h1>App</h1>
                  </PrivateRouteForAdmin>
               }
            />
            <Route
               path={ROUTES.SELLERS}
               element={
                  <PrivateRouteForAdmin>
                     <Sellers />
                  </PrivateRouteForAdmin>
               }
            />
            <Route
               path={ROUTES.SEllERBYID}
               element={
                  <PrivateRouteForAdmin>
                     <SellersDetails />
                  </PrivateRouteForAdmin>
               }
            />
            <Route
               path={ROUTES.USERS}
               element={
                  <PrivateRouteForAdmin>
                     <Users />
                  </PrivateRouteForAdmin>
               }
            />
            <Route
               path={ROUTES.USERBYID}
               element={
                  <PrivateRouteForAdmin>
                     <UserDetails />
                  </PrivateRouteForAdmin>
               }
            />
            <Route
               path={ROUTES.BOOKS}
               element={
                  <PrivateRouteForAdmin>
                     <AddBookForm />
                  </PrivateRouteForAdmin>
               }
            />
         </Route>
      </Routes>
   )
}

export default AdminRoutes
