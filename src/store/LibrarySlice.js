import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getLibraryData = createAsyncThunk(
  'posts/getLibraryData',
  async (args, { dispatch, getState }) => {
    return fetch(
      `https://api.github.com/users`
    ).then(res => res.json());
  }
);

const postsSlice = createSlice({
  name: 'libraryData',
  initialState: {
    list: [],
    status: null
  },
  extraReducers: {
    [getLibraryData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getLibraryData.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = 'success';
    },
    [getLibraryData.rejected]: (state, action) => {
      state.status = 'failed';
    }
  }
});

export default postsSlice.reducer;