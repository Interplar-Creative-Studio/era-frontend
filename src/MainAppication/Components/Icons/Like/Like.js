import React from "react";

export const Like = (props) => {
    return (
        <div onClick={props.onClick}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0H0V32H32V0Z" fill={props.color} fillOpacity="0.01"/>
                <path
                    d="M10.0001 5.33325C5.94999 5.33325 2.66675 8.61652 2.66675 12.6666C2.66675 19.9999 11.3334 26.6666 16.0001 28.2174C20.6667 26.6666 29.3334 19.9999 29.3334 12.6666C29.3334 8.61652 26.0501 5.33325 22.0001 5.33325C19.5199 5.33325 17.3272 6.56452 16.0001 8.44912C14.6729 6.56452 12.4803 5.33325 10.0001 5.33325Z"
                    stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
};
