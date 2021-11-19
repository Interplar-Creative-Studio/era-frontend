import React from "react";
import {NavLink} from "react-router-dom";

export const Share = (props) => {
    return(
        <NavLink to="#">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M30 0H0V30H30V0Z" fill="white" fillOpacity="0.01"/>
                <path
                    d="M21.875 10C23.6009 10 25 8.60087 25 6.875C25 5.14911 23.6009 3.75 21.875 3.75C20.1491 3.75 18.75 5.14911 18.75 6.875C18.75 8.60087 20.1491 10 21.875 10Z"
                    stroke="black" strokeWidth="2" strokeLinejoin="round"/>
                <path
                    d="M8.125 18.125C9.85087 18.125 11.25 16.7259 11.25 15C11.25 13.2741 9.85087 11.875 8.125 11.875C6.39912 11.875 5 13.2741 5 15C5 16.7259 6.39912 18.125 8.125 18.125Z"
                    stroke="black" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M18.7501 8.48413L10.8369 13.2784" stroke="black" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.8369 16.6025L19.1747 21.5294" stroke="black" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M21.875 20C23.6009 20 25 21.3991 25 23.125C25 24.8509 23.6009 26.25 21.875 26.25C20.1491 26.25 18.75 24.8509 18.75 23.125C18.75 21.3991 20.1491 20 21.875 20Z"
                    stroke="black" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
        </NavLink>
    );
};
