import React from "react";

export const Delete = (props) => {
    return(
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="38" height="38" stroke="black" strokeWidth="2"/>
            <path d="M32 8H8V32H32V8Z" fill="white" fillOpacity="0.01"/>
            <path d="M12 12L28 28" stroke="black" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M12 28L28 12" stroke="black" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>
    );
};
