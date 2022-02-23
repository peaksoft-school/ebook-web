import { configureStore } from '@reduxjs/toolkit'
import breadCrumbsReducer from './breadCrumbsSlice'
import signInSlice from './authReducer/signInSlice'

const store = configureStore({
   reducer: {
      bread: breadCrumbsReducer,
      authorization: signInSlice,
   },
})
export default store
