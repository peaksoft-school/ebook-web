import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { saveToLocalStorage, getFromLocalStorage } from '../utils/helpers'
import { EBOOKUSEROLE, EBOOKPERSONTOKEN } from '../utils/constants/constants'

export const asyncUpdateUserRole = createAsyncThunk(
   'role/asyncUpdateUserRole',
   async (role) => {
      const userInfo = getFromLocalStorage(EBOOKPERSONTOKEN)
      if (userInfo !== null) {
         const { authority } = userInfo
         saveToLocalStorage(EBOOKUSEROLE, authority)
      }
      return role
   }
)

const userRoleReducer = createSlice({
   name: 'userRoleReducer',
   initialState: {
      roleData: [],
   },
   extraReducers: {
      [asyncUpdateUserRole.pending]: (state) => {
         state.status = 'loading'
      },
      [asyncUpdateUserRole.fulfilled]: (state, action) => {
         state.roleData = action.payload
         state.status = 'success'
      },
      [asyncUpdateUserRole.rejected]: (state) => {
         state.status = 'failed'
      },
   },
})

export const userRoleReducerActions = userRoleReducer.actions
export default userRoleReducer.reducer
