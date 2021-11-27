import React from "react";
import {Input} from "../../../../../Components/AuthorizationComponents/Input/Input";
import {Textarea} from "../../../../../Components/AuthorizationComponents/Textarea/Textarea";

export const PhotoSettings = (props) => {
    return(
        <div className="personal-area__settings__area__account">
            <h2>Настройки серии работ</h2>
            <div className="personal-area__settings__area__account__personal-information">
                <Input className={"personal-area__settings__area__profile__personal-information__interests"}
                       text={"Название серии"} type={"text"} placeholder={"Ведите название серии"}/>
                <Input className={"personal-area__settings__area__profile__personal-information__interests"}
                       text={"Теги для поиска"} id="interestsTaPhotoEpisode" type={"text"} placeholder={"Начните вводить тег"}/>
                <Textarea className={"personal-area__settings__area__profile__personal-information__text-area"}
                          text={"Описание серии"} type={"text"} maxLength={"300"}/>
            </div>
        </div>
    );
};
