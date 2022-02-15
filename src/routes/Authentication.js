import { Route, Routes, Navigate } from 'react-router-dom'
import { ROUTES } from '../utils/constants/constants'

export default function AuthentificatioRoute() {
   return (
      <Routes>
         <Route path="/" element={<Navigate to={ROUTES.MAIN} />} />
         <Route path={ROUTES.MAIN} element={<h1>MAIN</h1>} />
      </Routes>
   )
}
