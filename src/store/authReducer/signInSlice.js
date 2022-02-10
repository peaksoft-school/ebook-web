import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authorizationFetch } from '../../api/authService'
import { saveToLocalStorage } from '../../utils/helpers'

export const authFetch = createAsyncThunk(
	'EbookUser/signIn',
	async function (EbookUserInfo, { rejectWithValue }) {
		try {
			const response = await authorizationFetch(EbookUserInfo)
			const data = await response.json()
			if (!response.ok) {
				throw new Error(data.message)
			}
			if (data.token) {
				saveToLocalStorage('EbookUser', data)
			}
			return data
		} catch (error) {
			return rejectWithValue(error.message)
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
