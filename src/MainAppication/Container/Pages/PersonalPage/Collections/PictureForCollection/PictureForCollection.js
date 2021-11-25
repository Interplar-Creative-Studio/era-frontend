import React from "react";
import {NavLink} from "react-router-dom";

export const PictureForCollection = (props) => {
    let image = props.image;
    return(
        <div className="personal-area__galery__unit">
            <NavLink to={image.imgLink}>
                <img alt={""} src={image.img}/>
            </NavLink>
            <div className="personal-area__galery__unit__description">
                <p>{image.pictureName}</p>
            </div>
        </div>
    );
};
