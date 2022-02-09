export const signInFetch = async (password, email) => {
	const response = await fetch('http://3.123.114.41/api/authentication', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ password, email }),
	})
	return response
}

export const clientRegistrationFetch = async (name, email, password) => {
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
	return data
}

export const vendorRegistrationFetch = async (
	email,
	password,
	firstName,
	lastName,
	phoneNumer,
) => {
	const response = await fetch('http://3.123.114.41/api/signup/vendor', {
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
	})

	if (!response.ok) {
		throw new Error(
			'This username or email already exists.Please try another option',
		)
	}

	const data = await response.json()
	return data
}
