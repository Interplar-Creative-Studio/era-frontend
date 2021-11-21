import React from "react";
import {NavLink} from "react-router-dom";

export const PersonalAvatar = (props) => {
    return(
        <NavLink to={props.href ?? "#"}>
        <img alt={""} src={props.img}/>
        </NavLink>
    );
};
