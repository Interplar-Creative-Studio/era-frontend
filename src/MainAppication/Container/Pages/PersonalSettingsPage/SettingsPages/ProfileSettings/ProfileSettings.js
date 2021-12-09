import React from "react";
import {Input} from "../../../../../Components/AuthorizationComponents/Input/Input";
import {Textarea} from "../../../../../Components/AuthorizationComponents/Textarea/Textarea";

export const ProfileSettings = (props) => {
    let getUser = props.user;

    return(
        <div className="personal-area__settings__area__profile">
            <h2>Настройки профиля</h2>
            <div className="personal-area__settings__area__profile__personal-information">
                <Input text={"Имя"} type={"text"} placeholder={getUser?.first_name} name={"first_name"} onChange={props.onChange}
                       className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                <Input text={"Фамилия"} type={"text"} placeholder={getUser?.last_name} name={"last_name"} onChange={props.onChange}
                       className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                <Input text={"Короткое имя"} type={"text"} placeholder={getUser?.username} name={"username"} onChange={props.onChange}
                       className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                <Textarea text={"Описание профиля"} placeholder={getUser?.description} name={"description"}
                          maxlength="300" id={"taNumber"} onChange={props.onChange}/>
                <Input text={"Ваше место проживания"} type={"text"} placeholder={getUser?.location} name={"location"} onChange={props.onChange}
                       className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
               {/* <Input text={"Интересы"} type={"text"} id={"interestsTa"} name={"username"} onChange={props.onChange}
                       className={"personal-area__settings__area__profile__personal-information__interests"}/>*/}
                <Input text={"Instagram"} type={"text"} placeholder={getUser?.instagram_url} name={"instagram_url"} onChange={props.onChange}
                       className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
                <Input text={"VK"} type={"text"} placeholder={getUser?.vk_url} name={"vk_url"} onChange={props.onChange}
                       className={"personal-area__settings__area__profile__personal-information__input-simple"}/>
            </div>
        </div>
    );
};
