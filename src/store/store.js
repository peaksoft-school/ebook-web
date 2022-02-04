import { configureStore } from "@reduxjs/toolkit"
import LibrarySlice from "./LibrarySlice"
const store = configureStore({
    reducer: {
        library: LibrarySlice
    }
})
export default store