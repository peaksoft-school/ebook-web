import { createSlice } from "@reduxjs/toolkit";

const breadCrumbsReducer = createSlice({
    name:'breadCrumbsReducer',
    initialState: {
        breadCrumbsData:[]
    },
    reducers:{
        updateBreadCrumbs(state,action) {
            state.breadCrumbsData = action.payload
        },
    }
})
export const breadCrumbsReducerActions = breadCrumbsReducer.actions;
export default breadCrumbsReducer