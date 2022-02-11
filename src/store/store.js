import { configureStore } from '@reduxjs/toolkit'
import signInSlice from './authReducer/signInSlice'
import breadCrumbsReducer from './BreadCrumbsSlice'
const store = configureStore({
	reducer: {
		bread: breadCrumbsReducer.reducer,
		authorization: signInSlice,
	},
})
export default store
