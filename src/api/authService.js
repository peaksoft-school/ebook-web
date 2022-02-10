export const signInFetch = async (data, optino) => {
	const { password, email } = data

	const response = await fetch('http://3.123.114.41/api/authentication', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ password, email }),
	})
	return response
}

export const clientRegistrationFetch = async (data) => {
	const { name, email, password } = data

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
	return response
}

export const vendorRegistrationFetch = async (data) => {
	const { password, email, firstName, lastName, phoneNumber } = data
	const response = await fetch('http://3.123.114.41/api/signup/vendor', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			firstName,
			lastName,
			phoneNumber,
			email,
			password,
		}),
	})

	return response
}
