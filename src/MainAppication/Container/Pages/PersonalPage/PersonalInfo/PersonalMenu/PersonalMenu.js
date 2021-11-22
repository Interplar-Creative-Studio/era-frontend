import React from "react";
import {MenuMap} from "../../../../../Components/MenuElement/MenuMap";

export const PersonalMenu = (props) => {
    return(
        <div className="personal-area__menu">
            <ul> <MenuMap arr={props.menu}/> </ul>
        </div>
    );
};
