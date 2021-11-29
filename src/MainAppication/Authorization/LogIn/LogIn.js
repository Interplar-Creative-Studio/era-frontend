import React, {useState} from "react";
import {LoginForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {getApi, sendVerify} from "../asyncFunctions/testFunctions";
import {login} from "../../../store/actions/auth";
import {continueWithFacebook, continueWithGoogle} from "../asyncFunctions/continueWith";

const LogIn = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({login: "", password: ""});
    const [verified, setVerified] = useState(false);


    const changeUsername = (e) => {
        setUsername(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const submitButtonClick = () => {
        let temp_user1 = {
            username: "syperOlao",
            password: "2132343498LdsFS",
        };
        props.logIn(temp_user1);
    }


    return (
        <div>
            <LoginForm changeUsername={changeUsername} username={username} changePassword={changePassword} password={password}
                       submitButtonClick={submitButtonClick} verified={verified} onClickGoogle={continueWithGoogle}
                        onClickFacebook={continueWithFacebook}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log("login state: ", state);
    return { isAuthenticated: state.auth.isAuthenticated,}
};

const mapDispatchToProps = {
    logIn: login,
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);