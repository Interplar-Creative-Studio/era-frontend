import React from "react";
import {NavLink} from "react-router-dom";
import {MoreOptions} from "./PictureIcons/MoreOptions";
import {Share} from "./PictureIcons/Share";
import {SaveFolder} from "./PictureIcons/SaveFolder";
import {Like} from "./PictureIcons/Like";
import {UnderText} from "./PictureIcons/UnderText";

export const Picture = (props) => {
    return(
        <div className="main__page__picture">
            <NavLink to={props.imgLink}><img src={props.img} alt={""}/>
                <div className="main__page__picture__hidden-info">
                    <MoreOptions/>
                    <Share/>
                    <SaveFolder/>
                    <Like/>
                </div>
            </NavLink>
            <NavLink to={props.pictureNameLink}>
            <p>{props.pictureName}</p>
          <UnderText/>
        </NavLink>
        </div>
    );
};
