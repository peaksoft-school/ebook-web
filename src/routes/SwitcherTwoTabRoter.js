import { Route, Navigate, Routes } from 'react-router-dom'
import { ROUTES } from '../utils/constants/consts'

export function SwitcherTwoTabRouter() {
    return (
        <Routes>
            <Route path={ROUTES.INIT} element={<Navigate to={ROUTES.FIRST}/>}/>
            <Route path={ROUTES.FIRST} element={<p>FIRST</p>}/>   {/* вместо FIRST, SECOND будут компоненты на которые будут перенаправления */}
            <Route path={ROUTES.SECOND} element={<p>SECOND</p>}/>
        </Routes>
            )
}