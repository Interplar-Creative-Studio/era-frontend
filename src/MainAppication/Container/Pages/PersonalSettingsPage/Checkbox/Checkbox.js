import React from "react";

export const Checkbox = (props) => {
    return(
        <div className="inputs-radio">
            <input type="checkbox" id={props.id}/>
            <label form={props.id}>{props.text}</label>
        </div>
    );
};
