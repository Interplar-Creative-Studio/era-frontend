import React from "react";
import {NavLink} from "react-router-dom";

const PUBLIC_URL = "public"

export const Button = (props) => {
    return (
        <div className={props.className} onClick={props.onClick} style={props.style}>
            <NavLink to={props.href}>
                {props.text}
            </NavLink>
        </div>
    );
};
