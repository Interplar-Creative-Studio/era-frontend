import React from "react";
import {PictureForPersonalPage} from "../PictureForPersonalPage/PictureForPersonalPage";

export const Gallery = (props) => {
    return(
        <div className="personal-area__galery">
            {props.images.map((image, i) => <PictureForPersonalPage key={i} image={image}/>)}
        </div>
    );
};
