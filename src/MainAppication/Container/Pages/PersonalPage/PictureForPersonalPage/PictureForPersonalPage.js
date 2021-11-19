import React from "react";
import {NavLink} from "react-router-dom";
import {Views} from "../../../../Components/Icons/Views";
import {FilledLike} from "../../../../Components/Icons/FilledLike";

export const PictureForPersonalPage = (props) => {
    return (
            <div className="personal-area__galery__unit">
                <NavLink to={props.imgLink}>
                    <img alt={""} src={props.img}/>
                </NavLink>
                <div className="personal-area__galery__unit__description">
                    <p>{props.pictureName}</p>
                    <div className="personal-area__galery__unit__description__stats">
                        <div className="personal-area__galery__unit__description__stats__views">
                            <Views/>
                            <p>{props.views}</p>
                        </div>
                        <div className="personal-area__galery__unit__description__stats__likes">
                           <FilledLike/>
                            <p>{props.likes}</p>
                        </div>
                    </div>
                </div>
            </div>

    );
};
