import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ROUTES, ROLES } from '../../../../utils/constants/constants'

const PrivateRouteForUser = ({ children }) => {
   const role = useSelector((state) => state.role.roleData)

   if (role === null) {
      return <Navigate to={ROUTES.LOGIN} replace />
   }
   if (role !== ROLES.CLIENT) {
      return <Navigate to={ROUTES.LOGIN} replace />
   }

   return children
}
export default PrivateRouteForUser
