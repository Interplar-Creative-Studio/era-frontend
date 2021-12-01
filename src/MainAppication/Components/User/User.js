import React from "react";
import {NavLink} from "react-router-dom";

export const User = (props) => {
    return (
        <>
            <NavLink to={props.imgLink ?? "#"}>
                <img src={props.img} alt={""}/>
            </NavLink>
            <NavLink to={props.nameLink ?? "#"}>
                <p>{props.name}</p>
            </NavLink>
        </>
    );
};
