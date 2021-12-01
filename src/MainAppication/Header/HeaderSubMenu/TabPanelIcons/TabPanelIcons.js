import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {ADD_PHOTO, ADD_PHOTO_SETTINGS_PHOTO} from "../../../../UrlsConst";
import {Add} from "../../../Components/Icons/Add";
import {Question2} from "../../../Components/Icons/Question2";

export const TabPanelIcons = (props) => {
    return (
        <div className="menu__third-block">
            <NavLink to={`${ADD_PHOTO}?settings=${ADD_PHOTO_SETTINGS_PHOTO}`}>
                <Add/>
            </NavLink>
            <NavLink to="#">
                <Question2/>
            </NavLink>
        </div>
    );
};
