import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUserList = createAsyncThunk(
  'userlist/getUserList',
  async (args, { dispatch, getState }) => {
     const response = await fetch(
      `https://reqres.in/api/users?page=2`
    )
    const data = response.json()
    return data
  }
);

const postsSlice = createSlice({
  name: 'userlist',
  initialState: {
    userlist: [],
    status: null
  },
  extraReducers: {
    [getUserList.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getUserList.fulfilled]: (state, action) => {
      state.userlist = action.payload;
      state.status = 'success';
    },
    [getUserList.rejected]: (state, action) => {
      state.status = 'failed';
    }
  }
});

export default postsSlice.reducer;