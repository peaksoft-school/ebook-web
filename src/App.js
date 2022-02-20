import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getFromLocalStorage } from './utils/helpers'
import { asyncUpdateBreadcrumb } from './store/breadCrumbsSlice'
import { EBOOK_BREADCRUMBS } from './utils/constants/constants'

import AdminRoutes from './routes/AdminRoutes'
import { asyncUpdateUserRole } from './store/asyncUpdateUserRole'

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(asyncAutoUpdateBreadcrumb())
      dispatch(asyncUpdateUserRole())
   }, [])

   return (
      <div className="App">
         <AdminRoutes />
      </div>
   )
}

export default App
