import React, {useState} from "react";
import {LoginForm} from "./LoginForm/LoginForm";
import axios from 'axios';

async function getUsers(){
    const url = `http://37.140.198.127/api/auth/users`;
    let response = await fetch(url, {headers: {'Access-Control-Allow-Origin': '*'}});
    if (response.ok){
        return await response.json();
    }else {
        return response.status;
    }
}

const continueWithGoogle = async () => {
    try {
        const res = await fetch.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)
        window.location.replace(res.data.authorization_url);
    } catch (err) {

    }
};

export const LogIn = ({verify, match}) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({login: "", password: ""});
    const [verified, setVerified] = useState(false);

    const verify_account = (e) => {
        const uid = match.params.uid;
        const token = match.params.token;
        verify(uid, token);
        setVerified(true);
    };

    const changeLogin = (e) => {
        setLogin(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const submitButtonClick = () => {
        setUser({...user, login: login, password: password});
        getUsers();
    }


    return (
        <div>
            <LoginForm changeLogin={changeLogin} login={login} changePassword={changePassword} password={password}
                       submitButtonClick={submitButtonClick} verified={verified}/>
        </div>
    );
};
