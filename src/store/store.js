import { configureStore } from "@reduxjs/toolkit"
import LibrarySlice from "./LibrarySlice"
import bookCratSlice from "./cratReducer/bookCratSlice"
const store = configureStore({
    reducer: {
        library: LibrarySlice,
        bookCrat: bookCratSlice,
    }
})
export default store