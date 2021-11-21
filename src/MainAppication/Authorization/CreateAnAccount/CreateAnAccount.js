import React from "react";
import {Input} from "../../Components/AuthorizationComponents/Input/Input";
import {Button} from "../../Components/AuthorizationComponents/Button/Button";

export const CreateAnAccount = (props) => {
    return (
        <div className="auth reg">
            <div className="auth__block reg__block">
                <h3>Era</h3>
                <div className="reg__block__form">
                    <h2>Создание аккаунта</h2>
                    <Input className={"auth__block__form__input"} text={"Логин"} type={"type"}
                           placeholder={"Придумайте логин"}/>
                    <Input className={"auth__block__form__input"} text={"Пароль"} type={"password"}
                           placeholder={"Придумайте пароль"}/>
                    <Input className={"auth__block__form__input"} text={"Электронная почта"} type={"type"}
                           placeholder={"Укажите электронную почту"}/>
                    <Button className={"auth__block__form__auth-button"} href={"#"} text={"Создать аккаунт"}/>
                    <div className="auth__block__form__sn">
                        <p>Или зарегистрируйтесь с помощью</p>
                        <div className="auth__block__form__sn__icons">
                            <a href="#">Google</a>
                            <a href="#">VK</a>
                            <a href="#">Facebook</a>
                        </div>
                    </div>
                    <Button className={"auth__block__form__reg-button"} href={"#"}
                            text={"Войти в существующий аккаунт"}/>
                </div>
            </div>
        </div>
    );
};
