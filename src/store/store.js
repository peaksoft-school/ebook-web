import { configureStore } from '@reduxjs/toolkit'
import LibrarySlice from './LibrarySlice'
import authSettings from './authReducer/signInSetting'

const store = configureStore({
	reducer: {
		authorization: authSettings,
		library: LibrarySlice,
	},
})
export default store
