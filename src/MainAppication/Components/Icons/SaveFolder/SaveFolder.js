import React from "react";

export const SaveFolder = (props) => {
    return (
        <div onClick={props.onClick}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M3.33325 5.33333C3.33325 4.59695 3.93021 4 4.66659 4H12.6666L15.9999 8H27.3333C28.0697 8 28.6666 8.59693 28.6666 9.33333V26.6667C28.6666 27.4031 28.0697 28 27.3333 28H4.66659C3.93021 28 3.33325 27.4031 3.33325 26.6667V5.33333Z"
                    stroke={props.color} strokeWidth="2" strokeLinejoin="round"/>
                <path d="M14.0001 15.3333L10.6667 18.6666L14.0001 21.9999" stroke={props.color}
                      strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.6667 18.6667H21.3334V14.6667" stroke={props.color} strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>
        </div>
    );
};
