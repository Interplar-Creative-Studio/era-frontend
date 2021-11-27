import React from "react";
import {NavLink} from "react-router-dom";
import {ADD_PHOTO, ADD_PHOTO_SETTINGS_PHOTO} from "../../../../UrlsConst";

export const TabPanelIcons = (props) => {
    return(
        <div className="menu__third-block">
            <NavLink to={`${ADD_PHOTO}?settings=${ADD_PHOTO_SETTINGS_PHOTO}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.9999 0.333374C10.2635 0.333374 9.66658 0.930334 9.66658 1.66671V9.66671H1.66659C0.930212 9.66671 0.333252 10.2636 0.333252 11C0.333252 11.7364 0.930212 12.3334 1.66659 12.3334H9.66658V20.3334C9.66658 21.0698 10.2635 21.6667 10.9999 21.6667C11.7363 21.6667 12.3333 21.0698 12.3333 20.3334V12.3334H20.3333C21.0697 12.3334 21.6666 11.7364 21.6666 11C21.6666 10.2636 21.0697 9.66671 20.3333 9.66671H12.3333V1.66671C12.3333 0.930334 11.7363 0.333374 10.9999 0.333374Z"
                    fill="black"/>
            </svg>
        </NavLink>
            <NavLink to="#">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0H0V32H32V0Z" fill="white" fillOpacity="0.01"/>
                <path
                    d="M16.0001 29.3333C19.6819 29.3333 23.0153 27.8409 25.4281 25.428C27.841 23.0152 29.3334 19.6818 29.3334 16C29.3334 12.3181 27.841 8.98476 25.4281 6.57187C23.0153 4.15901 19.6819 2.66663 16.0001 2.66663C12.3182 2.66663 8.98488 4.15901 6.57199 6.57187C4.15913 8.98476 2.66675 12.3181 2.66675 16C2.66675 19.6818 4.15913 23.0152 6.57199 25.428C8.98488 27.8409 12.3182 29.3333 16.0001 29.3333Z"
                    stroke="black" strokeWidth="2" strokeLinejoin="round"/>
                <path
                    d="M16 19.0833V16.4166C18.2091 16.4166 20 14.6258 20 12.4166C20 10.2075 18.2091 8.41663 16 8.41663C13.7909 8.41663 12 10.2075 12 12.4166"
                    stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M15.9999 25.0833C16.9204 25.0833 17.6666 24.3371 17.6666 23.4167C17.6666 22.4962 16.9204 21.75 15.9999 21.75C15.0795 21.75 14.3333 22.4962 14.3333 23.4167C14.3333 24.3371 15.0795 25.0833 15.9999 25.0833Z"
                      fill="black"/>
            </svg>
        </NavLink></div>
    );
};
