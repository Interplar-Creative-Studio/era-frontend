import React from "react";
import {MenuMap} from "../../../Components/MenuElement/MenuMap";
import {
    LOG_IN,
    PERSONAL,
    PERSONAL_COLLECTIONS, PERSONAL_GALLERY,
    PERSONAL_SETTINGS,
    PERSONAL_SETTINGS_PROFILE
} from "../../../../UrlsConst";

export const ExitPanel = (props) => {
    let menu = [
        {href: PERSONAL_GALLERY, text: "Личный кабинет"},
        {href: `${PERSONAL_COLLECTIONS}`, text: "Коллекция"},
        {href: LOG_IN, text: "Выход", onClick: props.logOut},
    ];

    return(
        <nav className="menu__first-block__user-profile__list-mini">
            <ul>
                <MenuMap arr={menu}/>
            </ul>
        </nav>
    );
};
