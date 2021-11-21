import React from "react";
import {Input} from "../../Components/AuthorizationComponents/Input/Input";
import {Button} from "../../Components/AuthorizationComponents/Button/Button";
import {SocialNetworks} from "../SocialNetworks/SocialNetworks";

export const LogIn = (props) => {
    return(
        <div className="auth reg">
            <div className="auth__block reg__block"><h3>Era</h3>
                <div className="reg__block__form"><h2>Вход</h2>
                    <Input className={"auth__block__form__input"} text={"Логин"} type={"type"}
                           placeholder={"Введите логин"}/>
                    <Input className={"auth__block__form__input"} text={"Пароль"} type={"password"}
                           placeholder={"Введите пароль"}/>
                    <Button className={"auth__block__form__auth-button"} href={"#"} text={"Войти"}/>
                    <div className="auth__block__form__sn">
                        <p>Войти с помощью</p>
                        <SocialNetworks/>
                    </div>
                    <Button className={"auth__block__form__reg-button"} href={"#"}
                            text={"Нет аккаунта"}/>
                </div>

            </div>
        </div>
    );
};
