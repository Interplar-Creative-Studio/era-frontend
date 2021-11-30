import React from "react";
import {Input} from "../../../../../Components/AuthorizationComponents/Input/Input";
import {Textarea} from "../../../../../Components/AuthorizationComponents/Textarea/Textarea";

export const ProfileSettings = (props) => {
    let getUser = props.user;

    return(
        <div className="personal-area__settings__area__profile">
            <h2>Настройки профиля</h2>
            <div className="personal-area__settings__area__profile__personal-information">
                <Input text={"Имя"} type={"text"} placeholder={getUser?.first_name}
                       className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                <Input text={"Фамилия"} type={"text"} placeholder={getUser?.last_name}
                       className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                <Input text={"Короткое имя"} type={"text"} placeholder={"@"}
                       className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                <Textarea text={"Описание профиля"} placeholder={getUser?.description}
                          maxlength="300" id={"taNumber"}/>
                <Input text={"Ваше место проживания"} type={"text"} placeholder={getUser?.location}
                       className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                <Input text={"Интересы"} type={"text"} id={"interestsTa"}
                       className={"personal-area__settings__area__profile__personal-information__interests"}/>
                <Input text={"Instagram"} type={"text"} placeholder={getUser?.instagram_url}
                       className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                <Input text={"VK"} type={"text"} placeholder={getUser?.vk_url}
                       className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
            </div>
        </div>
    );
};
