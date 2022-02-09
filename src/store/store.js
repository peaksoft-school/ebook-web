import { configureStore } from "@reduxjs/toolkit"
import BreadCrumbsReducer from "./BreadCrumbsSlice"
const store = configureStore({
    reducer: {
        bread: BreadCrumbsReducer.reducer
    }
})
export default store