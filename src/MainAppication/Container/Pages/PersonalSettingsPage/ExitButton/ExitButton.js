import React from "react";
import {NavLink} from "react-router-dom";
import {LOG_IN} from "../../../../../UrlsConst";

export const ExitButton = (props) => {
    return(
        <div>
            <div className="personal-area__settings__menu__button">
                <NavLink to={LOG_IN}>Выйти</NavLink>
            </div>
        </div>
    );
};
