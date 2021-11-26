import React from "react";
import {NavLink} from "react-router-dom";

export const Button = (props) => {
    return (
        <div className={props.className} onClick={props.onClick}>
            <NavLink to={props.href}>
                {props.text}
            </NavLink>
        </div>
    );
};
