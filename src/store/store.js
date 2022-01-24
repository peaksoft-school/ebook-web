import { configureStore } from "@reduxjs/toolkit"
import HistoryOperationSlice from "./HistoryOperationSlice"
const store = configureStore({
    reducer: {
        history: HistoryOperationSlice,
    }
})
export default store