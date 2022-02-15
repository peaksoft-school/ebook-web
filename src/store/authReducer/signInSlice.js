import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { saveToLocalStorage, sendRequest } from '../../utils/helpers'

export const authFetch = createAsyncThunk(
   'EbookUser/signIn',
<<<<<<< HEAD
   async function authFetch(ebookUserInfo, { rejectWithValue }) {
=======
   async (ebookUserInfo, { rejectWithValue }) => {
>>>>>>> 00e1760282605c68c399d1f95006cfc25549a178
      try {
         const response = await sendRequest(ebookUserInfo)
         if (response.token) {
            saveToLocalStorage('EbookUserToken', response)
         }
         return response
      } catch (error) {
         return rejectWithValue(error.message || 'Something went wrong')
      }
   }
)

const setError = (state, action) => {
   state.status = 'rejected'
   state.error = action.payload
}

const isPending = (state) => {
   state.status = 'loading'
   state.error = null
}

const setFulfilled = (state, action) => {
   state.error = null
   state.status = 'resolved'
   if (action.payload.token) {
      const { token, authority } = action.payload
      state.token = token
      state.role = authority
   } else {
      state.userRegCredential = 'successful'
   }
}

const signInSlice = createSlice({
   name: 'Auth',
   initialState: {
      token: '',
      role: '',
      status: null,
      error: null,
      userRegCredential: {},
   },
   reducers: {
      authenticateUser(state, action) {
         const { token, authority } = action.payload
         state.token = token
         state.role = authority
      },
      logout(state) {
         state.token = ''
         state.role = ''
      },
   },
   extraReducers: {
      [authFetch.pending]: isPending,
      [authFetch.fulfilled]: setFulfilled,
      [authFetch.rejected]: setError,
   },
})

export const setAuth = signInSlice.actions
export default signInSlice.reducer
