import { createSlice } from "@reduxjs/toolkit";

const BreadCrumbsReducer = createSlice({
    name:'breadCrumbReducer',
    initialState: {
        data:[],
        count: 0,
    },
    reducers:{
        addBreadCrumb(state,action) {
            state.data = [...state.data,action.payload]
            state.count = state.count + 1 

            const mappedArray = state.data.map(item => item.path_name)

            const filtered = state.data.filter(function({path_name}, index) {
                return !mappedArray.includes(path_name, index + 1)
            })

            state.data = filtered
        },

        addNewBreadCrumb(state,action) {
            state.count = 0
            state.data = []
            state.data = [...state.data,action.payload]
        },

        removeBreadCrumb(state,action) {
            if(state.data.length > 2)  {
                // console.log(state.count)
                state.count = state.count - 1
                console.log(state.count)
            //     console.log(state.count)
                state.data = state.data.splice(0,state.count)    
            }
        },
    }
})
export const BreadCrumbsReducerActions = BreadCrumbsReducer.actions;
export default BreadCrumbsReducer