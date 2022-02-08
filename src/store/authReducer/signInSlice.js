import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const signIn = createAsyncThunk(
	'EbookUser/signIn',
	async function (EbookUserInfo, { rejectWithValue }) {
		try {
			const { password, email } = EbookUserInfo
			const response = await fetch(
				'http://3.123.114.41/api/authentication',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ password, email }),
				},
			)

			if (!response.ok) {
				throw new Error('Missing valid credentials.')
			}

			const data = await response.json()
			localStorage.setItem('EbookUser', JSON.stringify(data))
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
			const { email, password, name } = EbookUserInfo
			console.log(EbookUserInfo)
			const response = await fetch(
				'http://3.123.114.41/api/client/signup/client',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ name, email, password }),
				},
			)

			if (!response.ok) {
				throw new Error(
					'This username or email already exists.Please try another option',
				)
			}

			const data = await response.json()
			localStorage.setItem('EbookUser', JSON.stringify(data))
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
			const { email, password, firstName, lastName, phoneNumer } =
				EbookUserInfo
			const response = await fetch(
				'http://3.123.114.41/api/signup/vendor',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						password,
						email,
						firstName,
						lastName,
						phoneNumer,
					}),
				},
			)

			if (!response.ok) {
				throw new Error(
					'This username or email already exists.Please try another option',
				)
			}

			const data = await response.json()
			localStorage.setItem('EbookUser', JSON.stringify(data))
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

const signInSlice = createSlice({
	name: 'Auth',
	initialState: { token: '', role: '', status: null, error: null },
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
		[clientRegistration.fulfilled]: setFulfilled,
		[clientRegistration.rejected]: setError,
		[vendorRegistration.pending]: isPending,
		[vendorRegistration.fulfilled]: setFulfilled,
		[vendorRegistration.rejected]: setError,
	},
})

export const setAuth = signInSlice.actions
export default signInSlice.reducer
