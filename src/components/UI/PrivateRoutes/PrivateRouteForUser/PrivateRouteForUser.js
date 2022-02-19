import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ROUTES } from '../../../../utils/constants/constants'

const PrivateRouteForUser = ({ children }) => {
   const role = useSelector((state) => state.authorization.role)

   if (role === null) {
      return <Navigate to={ROUTES.LOGIN} replace />
   }
   if (role !== 'CLIENT') {
      return <Navigate to={ROUTES.LOGIN} replace />
   }

   return children
}
export default PrivateRouteForUser
