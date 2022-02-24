import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { asyncAutoUpdateBreadcrumb } from './store/breadCrumbsSlice'
// import AdminRoutes from './routes/AdminRoutes'
import { asyncUpdateUserRole } from './store/userRoleSlice'
import AddBookForm from './containers/admin/adminAddBook/addBookForm/AddBookForm'
// import BooksCratLayout from './components/adminsBookCrat/BooksCrat'

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(asyncUpdateUserRole())
      dispatch(asyncAutoUpdateBreadcrumb())
   }, [])

   return (
      <div className="App">
         {/* <AdminRoutes /> */}
         {/* <BooksCratLayout /> */}
         <AddBookForm />
      </div>
   )
}

export default App
