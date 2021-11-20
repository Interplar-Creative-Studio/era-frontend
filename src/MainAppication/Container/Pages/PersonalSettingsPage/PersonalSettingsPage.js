import React from "react";
import {PersonalAvatar} from "../PersonalPage/PersonalInfo/PersonalAvatar/PersonalAvatar";
import {Input} from "./Input/Input";
import {Textarea} from "./Textarea/Textarea";

export const PersonalSettingsPage = (props) => {
    return(
        <div className="container">
            <div className="personal-area__settings">
                <a href="#"><PersonalAvatar img={"assets/img/testImg2.png"}/></a>
                <div className="personal-area__settings__area">
                    <div className="personal-area__settings__area__profile">
                        <h2>Настройки профиля</h2>
                        <div className="personal-area__settings__area__profile__personal-information">
                            <Input text={"Имя"} type={"text"} placeholder={"Динозавр"} className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                            <Input text={"Фамилия"} type={"text"} placeholder={"Никита"} className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                            <Input text={"Короткое имя"} type={"text"} placeholder={"@"} className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                            <Input text={"Короткое имя"} type={"text"} placeholder={"@"} className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                            <Textarea text={"Описание профиля"} placeholder={"Самая топовая вайфу твоего района"} maxlength="300" id={"taNumber"}/>
                            <Input text={"Ваше место проживания"} type={"text"} placeholder={"Москва"} className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                            <Input text={"Интересы"} type={"text"} id={"interestsTa"} className={"personal-area__settings__area__profile__personal-information__interests"}/>
                            <Input text={"Instagram"} type={"text"} placeholder={"@"} className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                            <Input text={"VK"} type={"text"} placeholder={"https: //"} className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                        </div>
                    </div>
                    <div className="personal-area__settings__area__account">
                        <h2>Настройки аккаунта</h2>
                        <div className="personal-area__settings__area__account__personal-information">
                            <div className="personal-area__settings__area__account__personal-information__input-simple simple-input">
                                <div className="simple-input">
                                    <p>Электронная почта</p>
                                    <input type="email" placeholder="Nikitadinosaur@gmail.com"/>
                                </div>
                            </div>
                            <div className="personal-area__settings__area__account__personal-information__input-simple">
                                <div className="simple-input">
                                    <p>Логин</p>
                                    <input type="text"/>
                                </div>
                                <div className="input-button"><a href="#">Изменить</a></div>
                            </div>
                            <div className="personal-area__settings__area__account__personal-information__input-simple">
                                <div className="simple-input">
                                    <p>Пароль</p>
                                    <input type="password"/>
                                </div>
                                <div className="input-button"><a href="#">Изменить</a></div>
                            </div>
                            <div className="personal-area__settings__area__account__personal-information__input-simple">
                                <div className="simple-input simple-select">
                                    <p>Язык</p>
                                    <select>
                                        <option value="0">Русский</option>
                                        <option value="1">Украинсикй</option>
                                    </select>
                                </div>
                                <div className="simple-input simple-select">
                                    <p>Страна/Регион</p>
                                    <select>
                                        <option value="0">Россия (РФ)</option>
                                        <option value="1">Украина</option>
                                    </select>
                                </div>
                            </div>
                            <div className="personal-area__settings__area__account__personal-information__input-simple">
                                <div className="simple-input simple-select">
                                    <p>Пол</p>
                                    <select>
                                        <option value="0">Мужчина</option>
                                        <option value="1">Женщина</option>
                                    </select>
                                </div>
                            </div>
                            <div className="personal-area__settings__area__account__personal-information__input-radio">
                                <h3>Параметры входа</h3>
                                <div className="inputs-radio">
                                    <input type="checkbox" id="radioGoogle"/>
                                        <label form="radioGoogle">Использовать аккаунт Google для входа</label>
                                </div>
                                <div className="inputs-radio">
                                    <input type="checkbox" id="radioFacebook"/>
                                        <label form="radioFacebook">Подключить аккаунт Facebook</label>
                                </div>
                            </div>
                            <div className="personal-area__settings__area__account__personal-information__delete-button"><a href="#">Удалить аккаунт</a></div>
                        </div>
                    </div>
                </div>
                <div className="personal-area__settings__menu">
                    <ul>
                        <li><a href="#">Настройки профиля</a></li>
                        <li><a href="#">Настройки аккаунта</a></li>
                        <li><a href="#">Настройки ленты</a></li>
                        <li><a href="#">Подтвердить аккаунт</a></li>
                        <li><a href="#">Разрешения</a></li>
                        <li><a href="#">Конфиденциальность</a></li>
                        <li><a href="#">Безоапсность</a></li>
                    </ul>
                    <div className="personal-area__settings__menu__button"><a href="#">Сохранить изменения</a></div>
                </div>
            </div>
        </div>
    );
};
