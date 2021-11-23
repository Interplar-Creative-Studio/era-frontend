import React from "react";
import {NavLink} from "react-router-dom";
import {IconsForPictures} from "./Icons/IconsForPictures";


export const PictureForPersonalPage = (props) => {
    return (
            <div className="personal-area__galery__unit">
                <NavLink to={props.imgLink}>
                    <img alt={""} src={props.img}/>
                </NavLink>
                <div className="personal-area__galery__unit__description">
                    <p>{props.pictureName}</p>
                    <IconsForPictures views={props.views} likes={props.likes}/>
                </div>
            </div>

    );
};
