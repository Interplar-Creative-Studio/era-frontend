import React from "react";

export const Input = (props) => {
    return(
        <div className={props.className}>
            <p>{props.text}</p>
            <input onChange={props.onChange} value={props.value} type={props.type} id={props.id ?? ""} placeholder={props.placeholder}/>
        </div>
    );
};
