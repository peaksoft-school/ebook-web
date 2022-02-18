import { Navigate } from 'react-router-dom'
import { getFromLocalStorage } from '../../../../utils/helpers'

const PrivateRouteForUser = ({ children }) => {
   const token = getFromLocalStorage('EbookUserToken')

   if (getFromLocalStorage('EbookUserToken') === null) {
      return <Navigate to="/login" replace />
   }
   if (token.authority !== 'CLIENT') {
      return <Navigate to="/login" replace />
   }

   return children
}
export default PrivateRouteForUser
