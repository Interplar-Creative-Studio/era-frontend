import React from "react";
import {NavLink} from "react-router-dom";
import {ExitPanel} from "../../Header/HeaderMainMenu/ExitPanel/ExitPanel";

export const User = (props) => {

    return (
        <div className="menu__first-block__user-profile">
            <NavLink to={props.imgLink}>
                <img src={props.img} alt={""}/>
            </NavLink>
            <NavLink to={props.nameLink}>
                <p>{props.name}</p>
            </NavLink>
            <ExitPanel/>
        </div>
    );
};
