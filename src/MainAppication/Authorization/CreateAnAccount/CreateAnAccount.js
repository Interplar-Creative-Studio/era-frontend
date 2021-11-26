import React, {useEffect, useState} from "react";
import {Input} from "../../Components/AuthorizationComponents/Input/Input";
import {Button} from "../../Components/AuthorizationComponents/Button/Button";
import {SocialNetworks} from "../SocialNetworks/SocialNetworks";
import {LOG_IN} from "../../../UrlsConst";

async function sendUser(user) {
    const url = `http://37.140.198.127/api/auth/users/`;
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: JSON.stringify(user),
        referrerPolicy: "unsafe-url",
        mode: "no-cors"
    });
    //let result = await response.json();
    //alert(result.message);
}

export const CreateAnAccount = (props) => {
    const [createLogin, setCreateLogin] = useState("");
    const [createPassword, setCreatePassword] = useState("");
    const [createEmail, setCreateEmail] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [createUser, setCreateUser] = useState({});
    // syperOlao
    // 2132343498LdsFS
    // olay1234538@gmail.com
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
            let user = {username: createLogin, password: createPassword, email: createEmail};
            sendUser(user).then(res => console.log(res));
            console.log("json: ", JSON.stringify(user));
        }
    }


    console.log("user: ", createUser);

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
                    <Input className={"auth__block__form__input"} text={"Электронная почта"} type={"type"}
                           value={createEmail} onChange={changeCreateEmail}
                           placeholder={"Укажите электронную почту"}/>
                    <Button className={"auth__block__form__auth-button"} href={"#"} text={"Создать аккаунт"}
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
