import { useEffect, useState } from 'react'
import './App.css'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { asyncAutoUpdateBreadcrumb } from './store/breadCrumbsSlice'
// import AdminRoutes from './routes/AdminRoutes'
// import AddBookForm from './containers/admin/adminAddBook/addBookForm/AddBookForm'
// import { asyncUpdateUserRole } from './store/userRoleSlice'
import { sendRequest } from './utils/helpers'

function App() {
   // const dispatch = useDispatch()

   // useEffect(() => {
   //    dispatch(asyncUpdateUserRole())
   //    dispatch(asyncAutoUpdateBreadcrumb())
   // }, [])
   const [genres, setGenres] = useState('')
   const onChangeGenresHandler = (e) => {
      setGenres(e.target.value)
   }
   const addGenre = async () => {
      const requestConfig = {
         url: 'api/genres/save',
         method: 'POST',
         body: { genreName: genres },
      }
      const response = await sendRequest(requestConfig)
      console.log(response)
   }

   const getAllGenres = async () => {
      const requestConfig = {
         method: 'GET',
         url: 'api/genres',
      }
      const response = await sendRequest(requestConfig)
      console.log(response)
   }
   useEffect(() => {
      getAllGenres()
   }, [])

   // const deleteGenreHandler = async () => {
   //    const requestConfig = {
   //       url: 'rere',
   //    }
   //    const response = await sendRequest(requestConfig)
   // }

   return (
      <div className="App">
         {/* <AdminRoutes /> */}
         {/* <AddBookForm /> */}
         <div>
            <input type="text" onChange={onChangeGenresHandler} />
            <button type="button" onClick={addGenre}>
               add
            </button>
            <button type="button">Delete genre</button>
         </div>
      </div>
   )
}

export default App
