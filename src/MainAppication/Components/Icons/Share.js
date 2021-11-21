import React from "react";

export const Share = (props) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <path d="M32 0H0V32H32V0Z" fillOpacity="0.01"/>
            <path
                d="M23.3333 10.6667C25.1743 10.6667 26.6667 9.17427 26.6667 7.33333C26.6667 5.49239 25.1743 4 23.3333 4C21.4924 4 20 5.49239 20 7.33333C20 9.17427 21.4924 10.6667 23.3333 10.6667Z"
                stroke={props.color} strokeWidth="2" strokeLinejoin="round"/>
            <path
                d="M8.66659 19.3334C10.5075 19.3334 11.9999 17.841 11.9999 16.0001C11.9999 14.1591 10.5075 12.6667 8.66659 12.6667C6.82565 12.6667 5.33325 14.1591 5.33325 16.0001C5.33325 17.841 6.82565 19.3334 8.66659 19.3334Z"
                stroke={props.color} strokeWidth="2" strokeLinejoin="round"/>
            <path d="M20.0001 9.04956L11.5593 14.1635" stroke={props.color} strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M11.5593 17.7092L20.4529 22.9646" stroke={props.color} strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path
                d="M23.3333 21.3333C25.1743 21.3333 26.6667 22.8257 26.6667 24.6666C26.6667 26.5075 25.1743 27.9999 23.3333 27.9999C21.4924 27.9999 20 26.5075 20 24.6666C20 22.8257 21.4924 21.3333 23.3333 21.3333Z"
                stroke={props.color} strokeWidth="2" strokeLinejoin="round"/>
        </svg>
    );
};
