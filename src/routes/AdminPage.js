import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../utils/constants/constants'
import Users from '../containers/admin/Users/Users'
import Sellers from '../containers/admin/Sellers/Sellers'
import SellerDetails from '../containers/admin/SellersDetails/SellersDetails'
import UserDetails from '../containers/admin/UserDetails/UserDetails'
import BooksCratLayout from '../components/adminsBookCrat/BooksCrat'
import AddBookForm from '../containers/admin/adminAddBook/addBookForm/AddBookForm'

function AdminPageRoute() {
   return (
      <Routes>
         <Route path={ROUTES.APPLICATIONS} index element={<h1>App</h1>} />
         <Route path={ROUTES.SELLERS} element={<Sellers />} />
         <Route path={ROUTES.SEllERBYID} element={<SellerDetails />} />
         <Route path={ROUTES.USERS} element={<Users />} />
         <Route path={ROUTES.USERBYID} element={<UserDetails />} />
         <Route path={ROUTES.BOOKS} element={<BooksCratLayout />} />
         <Route path={ROUTES.ADDBOOKS} element={<AddBookForm />} />
      </Routes>
   )
}

export default AdminPageRoute
