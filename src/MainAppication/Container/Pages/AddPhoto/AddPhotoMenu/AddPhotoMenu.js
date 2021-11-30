import React from "react";
import {NavLink} from "react-router-dom";
import {MenuMap} from "../../../../Components/MenuElement/MenuMap";
import {
    ADD_PHOTO,
    ADD_PHOTO_SETTINGS_MONETIZATION,
    ADD_PHOTO_SETTINGS_PHOTO,
    ADD_PHOTO_SETTINGS_SERIES,
    PICTURE_PAGE
} from "../../../../../UrlsConst";

export const AddPhotoMenu = (props) => {
    let menu = [
        {href: `${ADD_PHOTO}?settings=${ADD_PHOTO_SETTINGS_PHOTO}`, text: "Настройки фото"},
        {href: `${ADD_PHOTO}?settings=${ADD_PHOTO_SETTINGS_SERIES}`, text: "Настройки серии работ"},
        {href: `${ADD_PHOTO}?settings=${ADD_PHOTO_SETTINGS_MONETIZATION}`, text: "Настройки монетизации"},
    ];
    return(
        <div className="add-photo__button">
            <div className="personal-area__settings__menu">
                <div className="personal-area__settings__menu__button" onClick={props.onClickSubmit}>
                    <NavLink to="#">Опубликовать</NavLink></div>
                <ul>
                    <MenuMap arr={menu}/>
                </ul>
            </div>
            <div className="personal-area__settings__menu__button-cancel">
                <NavLink to={PICTURE_PAGE}>Отмена</NavLink>
            </div>
        </div>
    );
};
