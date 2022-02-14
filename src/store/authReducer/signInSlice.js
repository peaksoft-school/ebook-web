import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { saveToLocalStorage } from '../../utils/helpers'
import { sendRequest } from '../../../src/utils/helpers'

export const authFetch = createAsyncThunk(
	'EbookUser/signIn',
	async function (ebookUserInfo, { rejectWithValue }) {
		try {
			const response = await sendRequest(ebookUserInfo)
			if (response.token) {
				saveToLocalStorage('EbookUserToken', response)
			}
			return response
		} catch (error) {
			return rejectWithValue(error.message || 'Something went wrong')
		}
	},
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