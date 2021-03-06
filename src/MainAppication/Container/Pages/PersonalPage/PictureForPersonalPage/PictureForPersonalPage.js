import React from "react";
import {NavLink} from "react-router-dom";
import {IconsForPictures} from "./Icons/IconsForPictures";


export const PictureForPersonalPage = (props) => {
    let image = props.image;
    return (
        <div className="personal-area__galery__unit" onClick={() => {
            props.onClick();
            props.onClickPictureId(props.id)}}>
            <NavLink to={image.imgLink ?? "#"}>
                <img alt={""} src={image}/>
            </NavLink>
            <div className="personal-area__galery__unit__description">
                <p>{image.pictureName}</p>
                <IconsForPictures views={image.views} likes={image.likes}/>
            </div>
        </div>

    );
};
