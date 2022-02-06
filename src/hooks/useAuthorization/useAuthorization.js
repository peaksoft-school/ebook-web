// import useFetch from "use-http/dist/cjs/useFetch";

// const SIGIN_URL = 'http://3.123.114.41/api/authentication'
// const VENDOR_URL = 'http://3.123.114.41/api/signup/vendor'
// const CLIENT_URL = 'http://3.123.114.41/api/client/signup/client'

// export async function useSigIn(userData) {
//     const { post, response, loading, error} = useFetch(SIGIN_URL)
//     const { email, password } = userData
//     const data =  await post('/', { email: email, password: password })

//     if(!response.ok){
//         throw new Error(error || 'Could not fetch Authorization')
//     }
//     localStorage.setItem('EbookUser', JSON.stringify(data))
//     return {
//        loading, 
//        response
//     }
// }