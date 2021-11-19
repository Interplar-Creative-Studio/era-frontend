import React from "react";
import {MenuElement} from "../../Components/MenuElement/MenuElement";
import {TabPanelIcons} from "./TabPanelIcons/TabPanelIcons";

let menu = [
    {href: "#", text: "Wallpapers"},
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
                {menu.map((item, i) => <MenuElement key={i} menulink={item.href} menuName={item.text}/>)}
            </ul>
            <TabPanelIcons/>
        </div>
    );
};
