import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getHistoryOperationData = createAsyncThunk(
  'history/getHistoryOperationData',
  async (args, { dispatch, getState }) => {
     const response = await fetch(
      `https://api.github.com/users`
    )
    const data = response.json()
    return data
  }
);

const postsSlice = createSlice({
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

export default postsSlice.reducer;