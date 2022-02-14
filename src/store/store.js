import { configureStore } from '@reduxjs/toolkit'
import signInSlice from './authReducer/signInSlice'
import breadCrumbsReducer from './breadCrumbsSlice'

const store = configureStore({
   reducer: {
      bread: breadCrumbsReducer,
      authorization: signInSlice,
   },
})
export default store
