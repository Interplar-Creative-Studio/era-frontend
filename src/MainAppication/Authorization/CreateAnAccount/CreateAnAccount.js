import React, {useState} from "react";
import {Input} from "../../Components/AuthorizationComponents/Input/Input";
import {Button} from "../../Components/AuthorizationComponents/Button/Button";
import {SocialNetworks} from "../SocialNetworks/SocialNetworks";
import {LOG_IN, PICTURE_PAGE} from "../../../UrlsConst";
import {connect} from 'react-redux';
import {signup} from "../../../store/actions/auth";
import {getApi} from "../asyncFunctions/testFunctions";
import axios from "axios";


/*let user1 = {
    username: "syperOlao",
    password: "2132343498LdsFS",
    email: "olay1234538@gmail.com",
    first_name: "Anna",
    last_name: "Moklyakova"
};*/
function tempErrors(user) {
    console.log("jhhkkjlk");

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify(user);

    let res = axios.post(`${process.env.REACT_APP_API_URL}/api/auth/users/`, body, config).catch(res=>alert(res))

    //res.then(r=>console.log("test: ", r.statusText));

}

const CreateAnAccount = ({signup, isAuthenticated, error}) => {
    const [createLogin, setCreateLogin] = useState("");
    const [createPassword, setCreatePassword] = useState("");
    const [createEmail, setCreateEmail] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userSurname, setUserSurname] = useState("");
    const [createUser, setCreateUser] = useState({});

    const passwordLength = 6;
    const changeCreateLogin = (e) => {
        setCreateLogin(e.target.value);
    }
    const changeCreatePassword = (e) => {
        setCreatePassword(e.target.value);
    }
    const changeCreateEmail = (e) => {
        setCreateEmail(e.target.value);
    }
    const changeRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    }
    const onClickCreateUser = () => {
        if (createPassword !== repeatPassword) {
            alert("Пароли не совпадают!");
        } else if (createPassword.length < passwordLength) {
            alert(`Пароль содержит меньше ${passwordLength} символов`);
        } else {
            setCreateUser({...createUser, username: createLogin, password: createPassword, email: createEmail});
            let user = {
                username: createLogin,
                password: createPassword,
                email: createEmail,
                first_name: userName,
                last_name: userSurname
            };
            signup(user);
            tempErrors(user);
        }
    }


    return (
        <div className="auth reg">
            <div className="auth__block reg__block">
                <h3>Era</h3>
                <div className="auth__block__form">
                    <h2>Создание аккаунта</h2>
                    <Input className={"auth__block__form__input"} text={"Логин"} type={"type"} value={createLogin}
                           onChange={changeCreateLogin}
                           placeholder={"Придумайте логин"}/>
                    <Input className={"auth__block__form__input"} text={"Пароль"} type={"password"}
                           value={createPassword} onChange={changeCreatePassword}
                           placeholder={"Придумайте пароль"}/>
                    <Input className={"auth__block__form__input"} text={"Повторите пароль"} type={"password"}
                           value={repeatPassword} onChange={changeRepeatPassword}
                           placeholder={"Повторите пароль"}/>
                    <Input className={"auth__block__form__input"} text={"Электронная почта"} type={"email"}
                           value={createEmail} onChange={changeCreateEmail}
                           placeholder={"Укажите электронную почту"}/>
                    <Input className={"auth__block__form__input"} text={"Введите имя"} type={"text"}
                           value={userName} onChange={(e) => setUserName(e.target.value)}
                           placeholder={"Имя"}/>
                    <Input className={"auth__block__form__input"} text={"Введите фамилию"} type={"text"}
                           value={userSurname} onChange={e => setUserSurname(e.target.value)}
                           placeholder={"Фамилия"}/>
                    <Button className={"auth__block__form__auth-button"} href={isAuthenticated ? PICTURE_PAGE : "#"}
                            text={"Создать аккаунт"}
                            onClick={onClickCreateUser}/>
                    <div className="auth__block__form__sn">
                        <p>Или зарегистрируйтесь с помощью</p>
                        <SocialNetworks/>
                    </div>
                    <Button className={"auth__block__form__reg-button"} href={LOG_IN}
                            text={"Войти в существующий аккаунт"}/>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user,
        error: state.auth.error,
    };
}

export default connect(mapStateToProps, {signup})(CreateAnAccount)
