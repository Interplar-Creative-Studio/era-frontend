import React from "react";

export const UnderText = (props) => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M24 0H0V24H24V0Z" fill={props.color} fillOpacity="0.01"/>
        </svg>
    );
};
