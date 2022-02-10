import { configureStore } from "@reduxjs/toolkit"
import LibrarySlice from "./LibrarySlice"
import breadCrumbsReducer from "./BreadCrumbsSlice"
const store = configureStore({
    reducer: {
        library: LibrarySlice,
        bread: breadCrumbsReducer.reducer
    }
})
export default store