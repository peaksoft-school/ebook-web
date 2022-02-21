// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { asyncUpdateBreadcrumb } from './store/breadCrumbsSlice'
// import { getFromLocalStorage } from './utils/helpers'
// import { EBOOK_BREADCRUMBS } from './utils/constants/constants'
import AdminLayout from './components/admin/AdminLayot/AdminLayout'
// import AuthModal from './components/auth/authModal/AuthModal'
// import AddBookForm from './containers/admin/adminAddBook/addBookForm/AddBookForm'
import './App.css'

function App() {
   // const dispatch = useDispatch()

   // useEffect(() => {
   //    const breadcrumbs = getFromLocalStorage(EBOOK_BREADCRUMBS)
   //    dispatch(asyncUpdateBreadcrumb(breadcrumbs))
   // }, [])

   return (
      <div className="App">
         <AdminLayout />
         {/* <AuthModal /> */}
         {/* <AddBookForm /> */}
      </div>
   )
}

export default App
