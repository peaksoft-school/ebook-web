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

const E_BOOK_USER_TOKEN = 'EbookUserToken'

export const sendRequest = async (requestConfig) => {
   const userInfo = getFromLocalStorage(E_BOOK_USER_TOKEN)
   const requestOptions = {
      method: requestConfig.method || 'GET',
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${userInfo.token}`,
      },
   }

   if (requestConfig.method !== 'GET') {
      requestOptions.body = JSON.stringify(requestConfig.body)
   }
   const response = await fetch(DEFAULT_URL + requestConfig.url, requestOptions)

   if (!response.ok) {
      throw new Error(response.message)
   }
   const result = await response.json()
   return result
}
