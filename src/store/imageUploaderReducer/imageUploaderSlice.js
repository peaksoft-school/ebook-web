import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { sendFileToApi } from '../../utils/helpers'

export const fetchImage = createAsyncThunk(
   'image/fetchImage',
   async (requestConfig, { rejectWithValue }) => {
      try {
         const response = await sendFileToApi(requestConfig)
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
   const { id } = action.payload
   state.imagesId.push(id)
}

const sendImagesSlice = createSlice({
   name: 'images',
   initialState: {
      imagesId: [],
      status: null,
      error: null,
   },
   extraReducers: {
      [fetchImage.pending]: isPending,
      [fetchImage.fulfilled]: setFulfilled,
      [fetchImage.rejected]: setError,
   },
})

export const setImages = sendImagesSlice.actions
export default sendImagesSlice.reducer
