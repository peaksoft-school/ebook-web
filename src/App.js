import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { asyncAutoUpdateBreadcrumb } from './store/breadCrumbsSlice'
// import AdminRoutes from './routes/AdminRoutes'
import { asyncUpdateUserRole } from './store/userRoleSlice'
import BooksCratLayout from './components/adminsBookCrat/BooksCrat'
// import BookPage from './components/BookPage/BookPage'
// import SinglePageLayout from './components/singlePageLayout/SinglePageLayout'

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(asyncUpdateUserRole())
      dispatch(asyncAutoUpdateBreadcrumb())
   }, [])

   return (
      <div className="App">
         {/* <AdminRoutes /> */}
         <BooksCratLayout />
         {/* <BookPage /> */}
         {/* <SinglePageLayout /> */}
      </div>
   )
}

export default App
