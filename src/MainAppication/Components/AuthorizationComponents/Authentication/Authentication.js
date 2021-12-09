import React from "react";
import {NavLink} from "react-router-dom";

export const Authentication = (props) => {
    return (
        <div className={props.classNameContainer}>
            <div className={props.className}>
                <p>{props.text}</p>
                <input type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange}/>
            </div>
            <div className="input-button">
                <NavLink to={props.href}>{props.buttonText}</NavLink>
            </div>
        </div>
    );
};
