import React from "react";
import {PictureForCollection} from "./PictureForCollection/PictureForCollection";

export const Collections = (props) => {
    return(
        <div className={"personal-area__collection"}>
            {props.collections.map((image, i) => <PictureForCollection key={i} image={image}/>)}
        </div>
    );
};
