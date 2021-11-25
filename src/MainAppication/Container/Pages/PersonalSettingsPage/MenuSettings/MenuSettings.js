import React from "react";
import {MenuMap} from "../../../../Components/MenuElement/MenuMap";

export const MenuSettings = (props) => {
    return (
        <div className="personal-area__settings__menu">
            <ul>
                <MenuMap arr={props.menu}/>
            </ul>
            <div className="personal-area__settings__menu__button">
                <a href="#">Сохранить изменения</a>
            </div>
        </div>
    );
};
