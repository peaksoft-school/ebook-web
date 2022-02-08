import { configureStore } from '@reduxjs/toolkit'
import LibrarySlice from './LibrarySlice'
import signInSlice from './authReducer/signInSlice'

const store = configureStore({
	reducer: {
		authorization: signInSlice,
		library: LibrarySlice,
	},
})
export default store
