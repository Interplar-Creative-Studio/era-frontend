import React from "react";
import {PictureForPersonalPage} from "../PictureForPersonalPage/PictureForPersonalPage";

export const Gallery = (props) => {
    return(
        <div className="personal-area__galery">
            {props.images.map((image, i) => <PictureForPersonalPage imgLink={image.imgLink} img={image.img}
                pictureName={image.pictureName} views={image.views} key={i}
                likes={image.likes}/>)}
        </div>
    );
};
