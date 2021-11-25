import React from "react";
import {Authentication} from "../../../../../Components/AuthorizationComponents/Authentication/Authentication";
import {Option} from "../../../../../Components/AuthorizationComponents/Option/Option";
import {Checkbox} from "../../../../../Components/AuthorizationComponents/Checkbox/Checkbox";

export const AccountSettings = (props) => {
    return(
        <div className="personal-area__settings__area__account">
            <h2>Настройки аккаунта</h2>
            <div className="personal-area__settings__area__account__personal-information">

                <Authentication
                    classNameContainer={"personal-area__settings__area__account__personal-information__input-simple simple-input"}
                    className={"simple-input"} text={"Электронная почта"} type={"email"}
                    placeholder="Nikitadinosaur@gmail.com" href={"#"} buttonText={"Изменить"}/>
                <Authentication
                    classNameContainer={"personal-area__settings__area__account__personal-information__input-simple"}
                    className="simple-input" text={"Логин"} type="text" href={"#"} buttonText={"Изменить"}/>
                <Authentication
                    classNameContainer="personal-area__settings__area__account__personal-information__input-simple"
                    className="simple-input" text={"Пароль"} type={"password"} href={"#"}
                    buttonText={"Изменить"}/>

                <div className="personal-area__settings__area__account__personal-information__input-simple">
                    <Option text={"Язык"} options={props.languages}/>
                    <Option text={"Страна/Регион"} options={props.countries}/>
                </div>
                <div className="personal-area__settings__area__account__personal-information__input-simple">
                    <Option text={"Пол"} options={props.sex}/>
                </div>
                <div className="personal-area__settings__area__account__personal-information__input-radio">
                    <h3>Параметры входа</h3>
                    <Checkbox text={"Использовать аккаунт Google для входа"} id={"radioGoogle"}/>
                    <Checkbox text={"Подключить аккаунт Facebook"} id={"radioFacebook"}/>
                </div>
                <div
                    className="personal-area__settings__area__account__personal-information__delete-button">
                    <a href="#">Удалить аккаунт</a></div>
            </div>
        </div>
    );
};
