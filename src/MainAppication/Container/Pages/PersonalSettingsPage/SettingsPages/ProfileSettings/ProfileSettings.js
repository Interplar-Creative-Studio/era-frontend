import React from "react";
import {Input} from "../../../../../Components/AuthorizationComponents/Input/Input";
import {Textarea} from "../../../../../Components/AuthorizationComponents/Textarea/Textarea";

export const ProfileSettings = (props) => {
    return(
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
    );
};
