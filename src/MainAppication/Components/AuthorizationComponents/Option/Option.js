import React from "react";

export const Option = (props) => {
    return(
        <div className="simple-input simple-select">
            <p>{props.text}</p>
            <select
            value={props.value}
            >
                {props.options.map((elem, i) =>  <option key={i} value={elem.value}>{elem.label}</option>)}
            </select>
        </div>
    );
};
