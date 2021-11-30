import React from "react";
import {Input} from "../../../../../Components/AuthorizationComponents/Input/Input";
import {Textarea} from "../../../../../Components/AuthorizationComponents/Textarea/Textarea";

export const PhotoDescription = (props) => {
    return(
        <div className="personal-area__settings__area__profile">
            <h2>Настройки фото</h2>
            <div className="personal-area__settings__area__profile__personal-information">
                <Input className={"personal-area__settings__area__profile__personal-information__input-simple simple-input"}
                       text={"Название фото"} type={"text"} placeholder={"Ведите название фото"} onChange={props.onChange} name={'name'}/>
                <Input className={"personal-area__settings__area__profile__personal-information__interests"}
                       text={"Теги для поиска"} type={"text"} id="interestsTaPhoto" placeholder={"Начните вводить тег"} onChange={props.onChange} name={'tag'}/>
                <Textarea className={"personal-area__settings__area__profile__personal-information__text-area"}
                          text={"Описание фото"} type={"text"} maxLength={"300"} onChange={props.onChange} name={'description'}/>
            </div>
        </div>
    );
};
