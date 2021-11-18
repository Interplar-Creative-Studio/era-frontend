import React from "react";
import {NavLink} from "react-router-dom";


export const SubMenuElement = (props) => {
    return(<li><NavLink to={props.menulink}>{props.menuName}</NavLink></li>);
};
