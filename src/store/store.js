import { configureStore } from "@reduxjs/toolkit"
import UserListReducer from "./UserListReducer"
const store = configureStore({
    reducer: {
        userlist: UserListReducer,
    }
})
export default store