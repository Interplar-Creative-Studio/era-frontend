import React from "react";

export const FilledLike = (props) => {
    return(
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_0_193)">
                <path d="M16 0H0V16H16V0Z" fill={props.color}
                      fillOpacity="0.01"/>
                <path
                    d="M4.99967 2.66675C2.97463 2.66675 1.33301 4.30838 1.33301 6.33341C1.33301 10.0001 5.66634 13.3334 7.99967 14.1088C10.333 13.3334 14.6663 10.0001 14.6663 6.33341C14.6663 4.30838 13.0247 2.66675 10.9997 2.66675C9.75957 2.66675 8.66324 3.28238 7.99967 4.22468C7.33611 3.28238 6.23977 2.66675 4.99967 2.66675Z"
                    fill="black" stroke="black" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_0_193">
                    <rect width="16" height="16" fill={props.color}/>
                </clipPath>
            </defs>
        </svg>
    );
};
