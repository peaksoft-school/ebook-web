import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { asyncAutoUpdateBreadcrumb } from './store/breadCrumbsSlice'
// import AppRoutes from './routes/AppRoutes'
import { asyncUpdateUserRole } from './store/userRoleSlice'
import VendorAddBookForm from './containers/vendor/vendorAddBookForm/addBookForm/VendorAddBookForm'

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(asyncUpdateUserRole())
      dispatch(asyncAutoUpdateBreadcrumb())
   }, [])

   return (
      <div className="App">
         {/* <AppRoutes /> */}
         <VendorAddBookForm />
      </div>
   )
}

export default App
