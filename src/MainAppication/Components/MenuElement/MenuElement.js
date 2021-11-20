import React from "react";
import {Link, NavLink} from "react-router-dom";


export const MenuElement = (props) => {
    return(<li><Link to={props.menulink}>{props.menuName}</Link></li>);
};
