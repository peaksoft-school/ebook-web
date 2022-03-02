import { Route, Routes, Navigate } from 'react-router-dom'
import { ROUTES } from '../utils/constants/constants'
import AddBookForm from '../containers/admin/adminAddBook/addBookForm/AddBookForm'
import Users from '../containers/admin/Users/Users'
import Sellers from '../containers/admin/Sellers/Sellers'
import SellersDetails from '../containers/admin/SellersDetails/SellersDetails'
import UserDetails from '../containers/admin/UserDetails/UserDetails'
import AdminLayout from '../components/admin/AdminLayout/AdminLayout'
import PrivateRouteForAdmin from '../components/UI/PrivateRoutes/PrivateRouteForAdmin/PrivateRouteForAdmin'
import PrivateRouteForUser from '../components/UI/PrivateRoutes/PrivateRouteForUser/PrivateRouteForUser'
import PrivatePouteForVendor from '../components/UI/PrivateRoutes/PrivatePouteForVendor/PrivatePouteForVendor'
import AuthModal from '../components/auth/authModal/AuthModal'
import ClientMainPage from '../containers/client/ClientMainPage/ClientMainPage'
import Applications from '../containers/admin/Applications/Applications'

function AppRoutes() {
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
                     <Applications />
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
         <Route
            path={ROUTES.VENDOR_AREA}
            element={
               <PrivatePouteForVendor>
                  <p>VENDOR_AREA</p>
               </PrivatePouteForVendor>
            }
         />
         <Route
            path={ROUTES.BOOK_PAGE}
            element={
               <PrivatePouteForVendor>
                  <p>BOOK_PAGE</p>
               </PrivatePouteForVendor>
            }
         />
         <Route
            path={ROUTES.ADD_BOOK}
            element={
               <PrivatePouteForVendor>
                  <p>ADD_BOOK</p>
               </PrivatePouteForVendor>
            }
         />
         <Route
            path={ROUTES.PROFILE}
            element={
               <PrivatePouteForVendor>
                  <p>PROFILE</p>
               </PrivatePouteForVendor>
            }
         />
         <Route
            path={ROUTES.CLIENT}
            element={
               <PrivateRouteForUser>
                  <ClientMainPage />
               </PrivateRouteForUser>
            }
         />
         <Route path={ROUTES.SORT} element={<ClientMainPage />} />
         <Route path={ROUTES.INNER_PAGE} element={<p>INNER PAGE</p>} />
         <Route path={ROUTES.AUDIO_PAGE} element={<p>AUDIO_PAGE</p>} />
         <Route
            path={ROUTES.CART}
            element={
               <PrivateRouteForUser>
                  <ClientMainPage />
               </PrivateRouteForUser>
            }
         />
         <Route path={ROUTES.PROMO_CODE} element={<p>PROMO_CODE</p>} />
         <Route
            path={ROUTES.USER_PROFILE}
            element={
               <PrivateRouteForUser>
                  <p>USER_PROFILE</p>
               </PrivateRouteForUser>
            }
         />
         <Route
            path={ROUTES.PROFILE_HISTORY}
            element={
               <PrivateRouteForUser>
                  <p>PROFILE_HISTORY</p>
               </PrivateRouteForUser>
            }
         />
         <Route path={ROUTES.BECOME_VENDOR} element={<p>BECOME_VENDOR</p>} />
      </Routes>
   )
}

export default AppRoutes
