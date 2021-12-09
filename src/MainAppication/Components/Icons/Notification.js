import React from "react";
import {NavLink} from "react-router-dom";
import {NotificationModal} from "../../Header/HeaderMainMenu/NotificationModal/NotificationModal";

export const Notification = (props) => {
    return (

            <NavLink to="#">
                <svg width="24" height="24" viewBox="0 0 24 24"
                     fill="none" xmlns="http://www.w3.org/2000/svg">

                    <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>

                    <path d="M2 19H22M5 19V9C5 5.134 8.134 2 12 2C15.866 2 19 5.134 19 9V19H5Z" stroke="black"
                          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

                    <path d="M12 22C13.3807 22 14.5 20.8807 14.5 19.5V19H9.5V19.5C9.5 20.8807 10.6193 22 12 22Z"
                          stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="notification-alert"><span>{props.amount}</span></div>
                {props.notification && <NotificationModal onMouseOver={props.onMouseOver}/>}
            </NavLink>
    );
};
