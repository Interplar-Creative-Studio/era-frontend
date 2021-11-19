import React from "react";
import {HeaderMainMenu} from "./HeaderMainMenu/HeaderMainMenu";
import {HeaderSubMenu} from "./HeaderSubMenu/HeaderSubMenu";

export const Header = (props) => {
    return(
        /*<div className="menu">*/
        <div>
            <HeaderMainMenu/>
            <HeaderSubMenu/>
        </div>
    );
};
