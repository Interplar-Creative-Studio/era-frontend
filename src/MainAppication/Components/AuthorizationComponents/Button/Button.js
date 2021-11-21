import React from "react";
import {NavLink} from "react-router-dom";

export const Button = (props) => {
    return(
        <div className={props.className}>
            <NavLink to={props.href}>{props.text}</NavLink>
        </div>
    );
};
