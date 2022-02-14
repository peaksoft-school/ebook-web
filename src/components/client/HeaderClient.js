import React, { useState } from "react";
import Button from "../UI/Button/Button";
import EBookLogo from "../UI/EBookLogo/EBookLogo";
import classes from './HeaderClient.module.css'
import Modal from "../UI/modal/ModalWindow";
import AuthForm from "../loginForm/authForm/LoginForm";

export default function HeaderClient() {
    const [auth, setAuth] = useState(false)

    const AuthFormHandler = () => {
        setAuth(prevState => !prevState)
    }


    return (
            <div>
                <div className={classes.header}>
                    <EBookLogo/>
                    <div>
                        <Button onClick={AuthFormHandler}>Войти</Button>
                            {auth && (
                            <Modal onClose={AuthFormHandler}>
                                <AuthForm/>
                            </Modal>
                            )}
                    </div>
                </div>
        </div>
    )
}
