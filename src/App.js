// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { asyncUpdateBreadcrumb } from './store/breadCrumbsSlice'
// import { getFromLocalStorage } from './utils/helpers'
// import { EBOOK_BREADCRUMBS } from './utils/constants/constants'
// import AdminLayout from './components/admin/AdminLayot/AdminLayout'
import './App.css'
// import BooksCratLayout from './components/adminsBookCrat/BooksCrat'
// import VendorBookCard from './components/UI/VendorBookCard/VendorBookCard'
import AddBookForm from './containers/admin/adminAddBook/addBookForm/AddBookForm'

function App() {
   // const dispatch = useDispatch()

   // useEffect(() => {
   //    const breadcrumbs = getFromLocalStorage(EBOOK_BREADCRUMBS)
   //    dispatch(asyncUpdateBreadcrumb(breadcrumbs))
   // }, [])

   return (
      <div className="App">
         <AddBookForm />
         {/* <AdminLayout /> */}
         {/* <VendorBookCard /> */}
         {/* <BooksCratLayout /> */}
      </div>
   )
}

export default App
