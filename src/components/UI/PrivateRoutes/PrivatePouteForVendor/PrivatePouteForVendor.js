import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { ROUTES, ROLES } from '../../../../utils/constants/constants'

const PrivateRouteForVendor = ({ children }) => {
   const role = useSelector((state) => state.role.roleData)

   if (role === null) {
      return <Navigate to={ROUTES.LOGIN} replace />
   }
   if (role !== ROLES.VENDOR) {
      return <Navigate to={ROUTES.LOGIN} replace />
   }

   return children
}
export default PrivateRouteForVendor
