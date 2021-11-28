import React, {useState} from "react";
import {LoginForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {logInActionCreator} from "../../../store/actionCreators/authorization/logInActionCreator";


async function getUsers() {
    const url = `http://37.140.198.127/api/auth/users`;
    let response = await fetch(url, {headers: {'Access-Control-Allow-Origin': '*'}});
    if (response.ok) {
        return await response.json();
    } else {
        return response.status;
    }
}

async function getApi() {
    const url = `http://37.140.198.127/api/`;
    return fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({a: "don't cry :)"})})
}

const continueWithGoogle = async () => {
    try {
        const res = await fetch.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)
        window.location.replace(res.data.authorization_url);
    } catch (err) {

    }
};

const sendVerify = async () => {
    const url = `http://37.140.198.127/api/auth/users/activation/`;
    await fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uid: "MTg",
            token: "awucgc-6c6d499332c3860ccccd5905d2b2ee76",
        }),
        //mode: "no-cors",
    })
}

const LogIn = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({login: "", password: ""});
    const [verified, setVerified] = useState(false);

    /*    const verify_account = (e) => {
            const uid = match.params.uid;
            const token = match.params.token;
            verify(uid, token);
            setVerified(true);
        };*/

    const changeLogin = (e) => {
        setLogin(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const submitButtonClick = () => {
        let temp_user1 = {
            username: "syperOlao",
            password: "2132343498LdsFS"
        };
        props.logIn(temp_user1);
        sendVerify().then(res => console.log("token: ", res))
        getApi().then(res=>{console.log("api: ", res) })
    }


    return (
        <div>
            <LoginForm changeLogin={changeLogin} login={login} changePassword={changePassword} password={password}
                       submitButtonClick={submitButtonClick} verified={verified}/>
        </div>
    );
};
const mapDispatchToProps = {
    logIn: logInActionCreator,
}
export default connect(null, mapDispatchToProps)(LogIn);