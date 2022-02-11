export const saveToLocalStorage = (key, value) => {
	return localStorage.setItem(key, JSON.stringify(value))
}
export const getFromLocalStorage = (key) => {
	const json = localStorage.getItem(key)
	return JSON.parse(json)
}
export const deleteFromLocalStorage = (key) => {
	return localStorage.removeItem(key)
}

const DEFAULT_URL = 'http://3.123.114.41/'

export const sendRequest = async (requestConfig) => {
	const { url, method, headers, body } = requestConfig
	const response = await fetch(DEFAULT_URL + url, {
		method: method ? method : 'GET',
		headers: headers ? headers : { 'Content-Type': 'application/json' },
		body: body ? JSON.stringify(body) : null,
	})
	if (!response.ok) {
		throw new Error(response.message)
	}
	const result = await response.json()
	return result
}
