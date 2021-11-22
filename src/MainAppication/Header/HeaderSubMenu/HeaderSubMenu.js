import React from "react";
import {MenuElement} from "../../Components/MenuElement/MenuElement/MenuElement";
import {TabPanelIcons} from "./TabPanelIcons/TabPanelIcons";
import {PICTURE_PAGE} from "../../../UrlsConst";
import {MenuMap} from "../../Components/MenuElement/MenuMap";

let menu = [
    {href: PICTURE_PAGE, text: "Wallpapers"},
    {href: "#", text: "3D Renders"},
    {href: "#", text: "Textures & Patterns"},
    {href: "#", text: "Architecture"},
    {href: "#", text: "Current "},
    {href: "#", text: "Experimental"},
    {href: "#", text: "Nature"},
    {href: "#", text: "Fashion"},
    {href: "#", text: "Film"},
    {href: "#", text: "Food & Drink"},
];

export const HeaderSubMenu = (props) => {
    return(
        <div className="menu__second-block container">
            <ul>
                <MenuMap arr={menu}/>
            </ul>
            <TabPanelIcons/>
        </div>
    );
};
