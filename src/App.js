import './App.css'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { asyncAutoUpdateBreadcrumb } from './store/breadCrumbsSlice'
// import AdminRoutes from './routes/AdminRoutes'
// import { asyncUpdateUserRole } from './store/userRoleSlice'
import AdminBookPage from './containers/admin/AdminBookPage/AdminBookPage'

function App() {
   // const dispatch = useDispatch()

   // useEffect(() => {
   //    dispatch(asyncUpdateUserRole())
   //    dispatch(asyncAutoUpdateBreadcrumb())
   // }, [])

   return (
      <div className="App">
         {/* <AdminRoutes /> */}
         <AdminBookPage />
      </div>
   )
}

export default App
