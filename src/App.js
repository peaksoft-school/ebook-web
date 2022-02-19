import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getFromLocalStorage } from './utils/helpers'
import { asyncUpdateBreadcrumb } from './store/breadCrumbsSlice'
import {
   EBOOK_BREADCRUMBS,
   EBOOKPERSONTOKEN,
} from './utils/constants/constants'
import { setAuth } from './store/authReducer/signInSlice'

import AdminRoutes from './routes/AdminRoutes'

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      const breadcrumbs = getFromLocalStorage(EBOOK_BREADCRUMBS)
      const token = getFromLocalStorage(EBOOKPERSONTOKEN)
      dispatch(asyncUpdateBreadcrumb(breadcrumbs))
      dispatch(setAuth.authenticateUser(token))
   }, [])

   return (
      <div className="App">
         <AdminRoutes />
      </div>
   )
}

export default App
