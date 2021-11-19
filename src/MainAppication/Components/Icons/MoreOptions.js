import React from "react";
import {NavLink} from "react-router-dom";

export const MoreOptions = (props) => {
    return (<NavLink to="#">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M30 0H0V30H30V0Z" fill="white" fillOpacity="0.01"/>
                <path
                    d="M7.5 16.875C8.53553 16.875 9.375 16.0355 9.375 15C9.375 13.9645 8.53553 13.125 7.5 13.125C6.46447 13.125 5.625 13.9645 5.625 15C5.625 16.0355 6.46447 16.875 7.5 16.875Z"
                    fill="black"/>
                <path
                    d="M15 16.875C16.0355 16.875 16.875 16.0355 16.875 15C16.875 13.9645 16.0355 13.125 15 13.125C13.9645 13.125 13.125 13.9645 13.125 15C13.125 16.0355 13.9645 16.875 15 16.875Z"
                    fill="black"/>
                <path
                    d="M22.5 16.875C23.5355 16.875 24.375 16.0355 24.375 15C24.375 13.9645 23.5355 13.125 22.5 13.125C21.4645 13.125 20.625 13.9645 20.625 15C20.625 16.0355 21.4645 16.875 22.5 16.875Z"
                    fill="black"/>
            </svg>
        </NavLink>
    );
};
