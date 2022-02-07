import { configureStore } from "@reduxjs/toolkit"
import LibrarySlice from "./LibrarySlice"
import bookCratSlice from "./cratReducer/bookCratSlice"
import genresSlice from "./bookGenresReducer/genresSlice"
const store = configureStore({
    reducer: {
        library: LibrarySlice,
        bookCrat: bookCratSlice,
        genres: genresSlice,
    }
})
export default store