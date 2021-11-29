import React, {useState} from "react";
import {LoginForm} from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../../store/actions/auth";
import {continueWithFacebook, continueWithGoogle} from "../asyncFunctions/continueWith";

/*
let temp_user1 = {
       username: "syperOlao",
       password: "2132343498LdsFS",
   };
*/

const LogIn = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({login: "", password: ""});


    const changeUsername = (e) => {
        setUsername(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const submitButtonClick = () => {
        props.logIn({username: username, password: password});
    }


    return (
        <div>
            <LoginForm changeUsername={changeUsername} username={username} changePassword={changePassword}
                       password={password}
                       submitButtonClick={submitButtonClick} isAuthenticated={props.isAuthenticated}
                       onClickGoogle={continueWithGoogle}
                       onClickFacebook={continueWithFacebook}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {isAuthenticated: state.auth.isAuthenticated,}
};

const mapDispatchToProps = {
    logIn: login,
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);