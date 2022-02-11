<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'
import signInSlice from './authReducer/signInSlice'

const store = configureStore({
	reducer: {
		authorization: signInSlice,
	},
=======
import { configureStore } from "@reduxjs/toolkit"
import LibrarySlice from "./LibrarySlice"
import breadCrumbsReducer from "./BreadCrumbsSlice"
const store = configureStore({
    reducer: {
        library: LibrarySlice,
        bread: breadCrumbsReducer.reducer
    }
>>>>>>> 0547f701d491ca3a4035ebf2bd50258907e3b788
})
export default store
