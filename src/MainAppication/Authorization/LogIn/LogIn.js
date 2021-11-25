import React, {useState} from "react";
import {LoginForm} from "./LoginForm/LoginForm";

export const LogIn = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({login: "", password: ""});
    const changeLogin = (e) => {
        setLogin(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const submitButtonClick = () => {
        setUser({...user, login: login, password: password})
    }


    return (
        <div>
            <LoginForm changeLogin={changeLogin} login={login} changePassword={changePassword} password={password}
                       submitButtonClick={submitButtonClick}/>
        </div>
    );
};
