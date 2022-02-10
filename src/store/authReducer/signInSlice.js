import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
	clientRegistrationFetch,
	signInFetch,
	vendorRegistrationFetch,
} from '../../api/authorizationApi/authService'

export const signIn = createAsyncThunk(
	'EbookUser/signIn',
	async function (EbookUserInfo, { rejectWithValue }) {
		try {
			const response = await signInFetch(EbookUserInfo)
			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.message)
			}
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	},
)

export const clientRegistration = createAsyncThunk(
	'EbookUser/clientRegistration',
	async function (EbookUserInfo, { rejectWithValue }) {
		try {
			const response = await clientRegistrationFetch(EbookUserInfo)
			const data = await response.json()

			if (!response.ok) {
				throw new Error(data.message)
			}
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	},
)

export const vendorRegistration = createAsyncThunk(
	'EbookUser/vendorRegistration',
	async function (EbookUserInfo, { rejectWithValue }) {
		try {
			const response = await vendorRegistrationFetch(EbookUserInfo)
			const data = await response.json()
			if (!response.ok) {
				throw new Error(data.message)
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
	const { token, authority } = action.payload
	state.token = token
	state.role = authority
}

const setFulfilledClient = (state, action) => {
	state.error = null
	state.status = 'resolved'
	state.userRegCredential = action.payload
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
		[signIn.pending]: isPending,
		[signIn.fulfilled]: setFulfilled,
		[signIn.rejected]: setError,
		[clientRegistration.pending]: isPending,
		[clientRegistration.fulfilled]: setFulfilledClient,
		[clientRegistration.rejected]: setError,
		[vendorRegistration.pending]: isPending,
		[vendorRegistration.fulfilled]: setFulfilledClient,
		[vendorRegistration.rejected]: setError,
	},
})

export const setAuth = signInSlice.actions
export default signInSlice.reducer
