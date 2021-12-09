import React from "react";
import {MenuMap} from "../../../../Components/MenuElement/MenuMap";
import {NavLink} from "react-router-dom";
import {PERSONAL_SETTINGS, PERSONAL_SETTINGS_PROFILE} from "../../../../../UrlsConst";

export const MenuSettings = (props) => {
    return (
        <div className="personal-area__settings__menu">
            <ul>
                <MenuMap arr={props.menu}/>
            </ul>
            <div className="personal-area__settings__menu__button" onClick={props.onClickSubmit}>
                <NavLink to={`${PERSONAL_SETTINGS_PROFILE}`}>Сохранить изменения</NavLink>
            </div>
        </div>
    );
};
