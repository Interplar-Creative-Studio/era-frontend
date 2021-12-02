import React from "react";
import {PicturesMap} from "../../PicturesMainPage/PicturesMap/PicturesMap";

export const MorePhotos = (props) => {
    return(
        <div className="photo-modal__photo">
            <h1>Больше фото</h1>
            <div className="photo-modal__photo__block">
                <PicturesMap/>
            </div>
        </div>
    );
};
