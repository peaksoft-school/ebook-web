import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchBooks = createAsyncThunk(
	'bookСategory/fetchBooks',
	async function (_,{rejectWithValue}) {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/photos?_limit=8',
			)
			if (!response.ok) {
				throw new Error('BackEnd is just a weak brother ')
			}
			const data = await response.json()
			return data
		} catch(error) {
            return rejectWithValue(error.message)
        }
	},
)

const bookCratSlice = createSlice({
	name: 'bookСategory',
	initialState: {
		books: [],
		status: null,
		error: null,
	},
	extraReducers: {
		[fetchBooks.pending]: (state) => {
			state.status = 'loading'
			state.error = null
		},
		[fetchBooks.fulfilled]: (state, action) => {
			state.status = 'resolved'
			state.books = action.payload
		},
		[fetchBooks.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },
	},
})

export const booksCratActions = bookCratSlice.actions
export default bookCratSlice.reducer
