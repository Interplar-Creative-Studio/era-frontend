import React from "react";
import {PersonalAvatar} from "../PersonalPage/PersonalInfo/UserFullInfo/PersonalAvatar/PersonalAvatar";
import {Input} from "../../../Components/AuthorizationComponents/Input/Input";
import {Textarea} from "../../../Components/AuthorizationComponents/Textarea/Textarea";
import {Authentication} from "../../../Components/AuthorizationComponents/Authentication/Authentication";
import {Option} from "../../../Components/AuthorizationComponents/Option/Option";
import {Checkbox} from "../../../Components/AuthorizationComponents/Checkbox/Checkbox";
import {MenuMap} from "../../../Components/MenuElement/MenuMap";

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
    {value: 1, label: "Мужчина"},
    {value: 2, label: "Женщина"},
    {value: 3, label: "Другое"},
];

let menu = [
    {href: "#", text: "Настройки профиля"},
    {href: "#", text: "Настройки аккаунта"},
    {href: "#", text: "Настройки ленты"},
    {href: "#", text: "Подтвердить аккаунт"},
    {href: "#", text: "Разрешения"},
    {href: "#", text: "Конфиденциальность"},
    {href: "#", text: "Безопасность"},
];

export const PersonalSettingsPage = (props) => {

    return (
        <div className="container">
            <div className="personal-area__settings">
                    <PersonalAvatar img={"assets/img/testImg2.png"} href={"#"}/>
                <div className="personal-area__settings__area">
                    <div className="personal-area__settings__area__profile">
                        <h2>Настройки профиля</h2>
                        <div className="personal-area__settings__area__profile__personal-information">
                            <Input text={"Имя"} type={"text"} placeholder={"Динозавр"}
                                   className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                            <Input text={"Фамилия"} type={"text"} placeholder={"Никита"}
                                   className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                            <Input text={"Короткое имя"} type={"text"} placeholder={"@"}
                                   className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                            <Input text={"Короткое имя"} type={"text"} placeholder={"@"}
                                   className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                            <Textarea text={"Описание профиля"} placeholder={"Самая топовая вайфу твоего района"}
                                      maxlength="300" id={"taNumber"}/>
                            <Input text={"Ваше место проживания"} type={"text"} placeholder={"Москва"}
                                   className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                            <Input text={"Интересы"} type={"text"} id={"interestsTa"}
                                   className={"personal-area__settings__area__profile__personal-information__interests"}/>
                            <Input text={"Instagram"} type={"text"} placeholder={"@"}
                                   className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                            <Input text={"VK"} type={"text"} placeholder={"https: //"}
                                   className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                        </div>
                    </div>
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
                                <Option text={"Язык"} options={languages}/>
                                <Option text={"Страна/Регион"} options={countries}/>
                            </div>
                            <div className="personal-area__settings__area__account__personal-information__input-simple">
                                <Option text={"Пол"} options={sex}/>
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
                </div>
                <div className="personal-area__settings__menu">
                    <ul>
                        <MenuMap arr={menu}/>
                    </ul>
                    <div className="personal-area__settings__menu__button"><a href="#">Сохранить изменения</a></div>
                </div>
            </div>
        </div>
    );
};
