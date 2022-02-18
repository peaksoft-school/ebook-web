import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AdminRoutes from './routes/AdminRoutes'
import { asyncUpdateBreadcrumb } from './store/breadCrumbsSlice'
import { getFromLocalStorage } from './utils/helpers'
import { EBOOK_BREADCRUMBS } from './utils/constants/constants'

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      const breadcrumbs = getFromLocalStorage(EBOOK_BREADCRUMBS)
      dispatch(asyncUpdateBreadcrumb(breadcrumbs))
   }, [])

   return (
      <div className="App">
         <AdminRoutes />
      </div>
   )
}

export default App
