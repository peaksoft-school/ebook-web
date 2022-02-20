import { configureStore } from '@reduxjs/toolkit'
import { asyncUpdateUserRole } from './asyncUpdateUserRole'
import signInSlice from './authReducer/signInSlice'
import breadCrumbsReducer from './breadCrumbsSlice'

const store = configureStore({
   reducer: {
      bread: breadCrumbsReducer,
      authorization: signInSlice,
      userRole: asyncUpdateUserRole,
   },
})
export default store
