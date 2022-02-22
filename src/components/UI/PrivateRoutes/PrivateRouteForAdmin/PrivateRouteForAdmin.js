import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ROUTES, ROLES } from '../../../../utils/constants/constants'

const PrivateRouteForAdmin = ({ children }) => {
   const role = useSelector((state) => state.role.roleData)

   if (role === null) {
      return <Navigate to={ROUTES.LOGIN} replace />
   }
   if (role !== ROLES.ADMIN) {
      return <Navigate to={ROUTES.LOGIN} replace />
   }

   return children
}
export default PrivateRouteForAdmin
