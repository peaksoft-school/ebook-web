import { configureStore } from '@reduxjs/toolkit'
import signInSlice from './authReducer/signInSlice'

const store = configureStore({
	reducer: {
		authorization: signInSlice,
	},
})
export default store
