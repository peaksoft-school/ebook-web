export const authorizationFetch = async (EbookUserInfo) => {
	const response = await fetch(`http://3.123.114.41/api/${EbookUserInfo.url}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(EbookUserInfo.EbookUser),
	})
	return response
}