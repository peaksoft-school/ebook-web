import { Navigate } from 'react-router-dom'
import { getFromLocalStorage } from '../../../../utils/helpers'

const PrivateRouteForVendor = ({ children }) => {
   const token = getFromLocalStorage('EbookUserToken')

   if (getFromLocalStorage('EbookUserToken') === null) {
      return <Navigate to="/login" replace />
   }
   if (token.authority !== 'VENDOR') {
      return <Navigate to="/login" replace />
   }

   return children
}
export default PrivateRouteForVendor
