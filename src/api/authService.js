export const authorizationFetch = async (ebookUserInfo) => {
	const response = await fetch(
		`http://3.123.114.41/api/${ebookUserInfo.url}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(ebookUserInfo.ebookUser),
		},
	)
	return response
}
