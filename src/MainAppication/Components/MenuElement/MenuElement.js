import React from "react";
import {NavLink} from "react-router-dom";


export const MenuElement = (props) => {
    return(<li><NavLink to={props.menulink}>{props.menuName}</NavLink></li>);
};
