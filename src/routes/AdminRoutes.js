import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../utils/constants/constants'
import AddBookForm from '../containers/admin/adminAddBook/addBookForm/AddBookForm'
import Users from '../containers/admin/Users/Users'
import Sellers from '../containers/admin/Sellers/Sellers'
import SellersDetails from '../containers/admin/SellersDetails/SellersDetails'
import UserDetails from '../containers/admin/UserDetails/UserDetails'

function AdminRoutes() {
   return (
      <Routes>
         <Route path={ROUTES.APPLICATIONS} index element={<h1>App</h1>} />
         <Route path={ROUTES.SELLERS} element={<Sellers />} />
         <Route path={ROUTES.SEllERBYID} element={<SellersDetails />} />
         <Route path={ROUTES.USERS} element={<Users />} />
         <Route path={ROUTES.USERBYID} element={<UserDetails />} />
         <Route path={ROUTES.BOOKS} element={<AddBookForm />} />
      </Routes>
   )
}

export default AdminRoutes
