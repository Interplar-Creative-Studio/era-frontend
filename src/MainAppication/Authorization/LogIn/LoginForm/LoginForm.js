import React, {useState} from "react";
import {Input} from "../../../Components/AuthorizationComponents/Input/Input";
import {Button} from "../../../Components/AuthorizationComponents/Button/Button";
import {SocialNetworks} from "../../SocialNetworks/SocialNetworks";
import {CREATE_AN_ACCOUNT, PICTURE_PAGE} from "../../../../UrlsConst";
import {ExitIcon} from "../../../Components/Icons/ExitIcon";

export const LoginForm = (props) => {
    console.log("era");
    return (
        <div className="auth__block reg__block"><h3>Era</h3>
            <div className="auth__block__form"><h2>Вход</h2>

                <Input onChange={props.changeUsername} value={props.username} className={"auth__block__form__input"}
                       text={"Логин"} type={"type"}
                       placeholder={"Введите логин"}/>
                <Input onChange={props.changePassword} value={props.password} className={"auth__block__form__input"}
                       text={"Пароль"} type={"password"}
                       placeholder={"Введите пароль"}/>
                <Button className={"auth__block__form__auth-button"} href={props.isAuthenticated ? PICTURE_PAGE : "#"}
                        text={"Войти"} onClick={props.submitButtonClick}/>
                <div className="auth__block__form__sn">
                    <p>Войти с помощью</p>
                    <SocialNetworks
                        onClickFacebook={props.onClickFacebook}
                        onClickGoogle={props.onClickGoogle}
                    />
                </div>
                <Button className={"auth__block__form__reg-button"} href={CREATE_AN_ACCOUNT}
                        text={"Нет аккаунта"}/>

            </div>
            {props.isExit && <div className="auth__block__form__button" onClick={props.onClickLoginExit}>
                <ExitIcon />
            </div>}
        </div>
    );
};
