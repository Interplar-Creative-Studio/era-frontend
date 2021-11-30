import React from "react";
import {Input} from "../../../../../Components/AuthorizationComponents/Input/Input";

export const PhotoMonetization = (props) => {
    return (
        <div className="personal-area__settings__area__account">
            <h2>Настройки серии работ</h2>
            <div className="personal-area__settings__area__account__personal-information">
                <Input className={"personal-area__settings__area__profile__personal-information__input-simple simple-input"}
                       text={"Цена"} type={"text"} placeholder={"Ведите цену"} onChange={props.onChange} name={'price'}/>
            </div>

        </div>
    );
};
