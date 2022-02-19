import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { ROUTES } from '../../../../utils/constants/constants'

const PrivateRouteForVendor = ({ children }) => {
   const role = useSelector((state) => state.authorization.role)

   if (role === null) {
      return <Navigate to={ROUTES.LOGIN} replace />
   }
   if (role !== 'VENDOR') {
      return <Navigate to={ROUTES.LOGIN} replace />
   }

   return children
}
export default PrivateRouteForVendor
