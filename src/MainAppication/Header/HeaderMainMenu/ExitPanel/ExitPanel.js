import React from "react";
import {MenuMap} from "../../../Components/MenuElement/MenuMap";
import {
    LOG_IN,
    PERSONAL,
    PERSONAL_COLLECTIONS,
    PERSONAL_SETTINGS,
    PERSONAL_SETTINGS_PROFILE
} from "../../../../UrlsConst";

export const ExitPanel = (props) => {
    let menu = [
        {href: `${PERSONAL_SETTINGS}?settings=${PERSONAL_SETTINGS_PROFILE}`, text: "Личный кабинет"},
        {href: `${PERSONAL}?name=${PERSONAL_COLLECTIONS}`, text: "Коллекция"},
        {href: LOG_IN, text: "Выход"},
    ];

    return(
        <nav className="menu__first-block__user-profile__list-mini"
             onMouseLeave={props.onMouseLeave} onMouseOver={props.onMouseOver}>
            <ul>
                <MenuMap arr={menu}/>
            </ul>
        </nav>
    );
};
