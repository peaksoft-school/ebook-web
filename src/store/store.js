import { configureStore } from '@reduxjs/toolkit'
import breadCrumbsReducer from './BreadCrumbsSlice'
import signInSlice from './authReducer/signInSlice'

const store = configureStore({
   reducer: {
      bread: breadCrumbsReducer,
      authorization: signInSlice,
   },
})
export default store
