import { Route, Routes, Navigate } from "react-router-dom";
import { ROUTES } from "../utils/constants/constants";
import AuthForm from '../components/loginForm/authForm/LoginForm'

export default function AuthentificatioRoute() {
    return (
        <>
        <Routes>
                <Route path="/" element={<Navigate to={ROUTES.MAIN}/>}/>
                <Route path={ROUTES.MAIN} element={<h1>MAIN</h1>}/>
        </Routes>
        </>
    )
}

