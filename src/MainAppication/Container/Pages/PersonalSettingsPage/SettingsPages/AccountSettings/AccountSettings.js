import React from "react";
import {Authentication} from "../../../../../Components/AuthorizationComponents/Authentication/Authentication";
import {Option} from "../../../../../Components/AuthorizationComponents/Option/Option";
import {Checkbox} from "../../../../../Components/AuthorizationComponents/Checkbox/Checkbox";

let languages = [
    {value: 1, label: "Русский"},
    {value: 2, label: "Український"},
    {value: 3, label: "English"},
];
let countries = [
    {value: 1, label: "Россия (РФ)"},
    {value: 2, label: "Украина"},
    {value: 3, label: "США"},
];
let sex = [
    {value: "m", label: "Мужчина"},
    {value: "w", label: "Женщина"},
    {value: "o", label: "Другое"},
];

export const AccountSettings = (props) => {
    let getUser = props.user;
    return(
        <div className="personal-area__settings__area__account">
            <h2>Настройки аккаунта</h2>
            <div className="personal-area__settings__area__account__personal-information">

                <Authentication
                    classNameContainer={"personal-area__settings__area__account__personal-information__input-simple simple-input"}
                    className={"simple-input"} text={"Электронная почта"} type={"email"}
                    placeholder={getUser?.email} href={"#"} buttonText={"Изменить"}/>
                <Authentication
                    classNameContainer={"personal-area__settings__area__account__personal-information__input-simple"}
                    placeholder={getUser?.username}
                    className="simple-input" text={"Логин"} type="text" href={"#"} buttonText={"Изменить"}/>
                <Authentication
                    classNameContainer="personal-area__settings__area__account__personal-information__input-simple"
                    className="simple-input" text={"Пароль"} type={"password"} href={"#"}
                    buttonText={"Изменить"}/>

                <div className="personal-area__settings__area__account__personal-information__input-simple">
                    <Option text={"Язык"} options={languages}/>
                    <Option text={"Страна/Регион"} options={countries}/>
                </div>
                <div className="personal-area__settings__area__account__personal-information__input-simple">
                    <Option text={"Пол"} options={sex} value={getUser?.sex}/>
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
