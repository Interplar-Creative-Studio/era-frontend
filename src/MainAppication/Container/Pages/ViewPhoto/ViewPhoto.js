import React from "react";
import {ViewPhotoHeader} from "./ViewPhotoHeader/ViewPhotoHeader";
import {Slider} from "./Slider/Slider";
import {PhotoModalTitle} from "./PhotoModalTitle/PhotoModalTitle";
import {ViewPhotoDescription} from "./ViewPhotoDescription/ViewPhotoDescription";
import {MorePhotos} from "./MorePhotos/MorePhotos";

export const ViewPhoto = (props) => {
    return (
        <div className="photo-modal-window">
            <div className="photo-modal">
                <ViewPhotoHeader onClick={props.onClick}/>
                <Slider/>
                <PhotoModalTitle/>
                <ViewPhotoDescription/>
                <MorePhotos/>
            </div>
        </div>
    );
};
