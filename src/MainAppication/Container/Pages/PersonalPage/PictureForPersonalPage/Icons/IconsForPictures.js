import React from "react";
import {Views} from "../../../../../Components/Icons/Views";
import {FilledLike} from "../../../../../Components/Icons/FilledLike";

export const IconsForPictures = (props) => {
    return(
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
    );
};
