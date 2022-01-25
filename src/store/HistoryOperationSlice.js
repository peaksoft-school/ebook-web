import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const users = {"user":"Bayba"}
export const getHistoryOperationData = createAsyncThunk(
  'history/getHistoryOperationData',
  async (args, { dispatch, getState }) => {
     const response = await fetch(
      `https://test-ebook-api-default-rtdb.firebaseio.com/users`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({users})
      }
    )
    const data = response.json()
    return data
  }
);

const GetHistorySlice = createSlice({
  name: 'libraryData',
  initialState: {
    history: [],
    status: null
  },
  extraReducers: {
    [getHistoryOperationData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getHistoryOperationData.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [getHistoryOperationData.rejected]: (state, action) => {
      state.status = 'failed';
    }
  }
});

export default GetHistorySlice.reducer;