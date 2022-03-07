import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { asyncAutoUpdateBreadcrumb } from './store/breadCrumbsSlice'
// import AppRoutes from './routes/AppRoutes'
import { asyncUpdateUserRole } from './store/userRoleSlice'
import UpdateClientFormAccount from './containers/client/updateClientAccount/UpdateClientAccountForm'
// import BooksCratLayout from './components/adminsBookCrat/BooksCrat'

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(asyncUpdateUserRole())
      dispatch(asyncAutoUpdateBreadcrumb())
   }, [])

   return (
      <div className="App">
         {/* <AppRoutes /> */}
         {/* <UpdateVendorFormAccount /> */}
         {/* <UpdateClientFormAccount /> */}
         {/* <BooksCratLayout /> */}
         <UpdateClientFormAccount />
      </div>
   )
}

export default App
