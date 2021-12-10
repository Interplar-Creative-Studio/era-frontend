import React from "react";
import {NavLink} from "react-router-dom";

export const Authentication = (props) => {
    return (
        <div className={props.classNameContainer}>
            <div className={props.className}>
                <p>{props.text}</p>
                <input type={props.type} placeholder={props.placeholder} name={props.name}
                       disabled={props.disabled} onChange={props.onChange}/>
            </div>
            {!props.invisible && <div className="input-button" onClick={props.onClickSubmit}>
                <NavLink to={props.href}>{props.buttonText}</NavLink>
            </div>}
        </div>
    );
};
