import React, {useEffect, useState} from "react";
import {PicturesMap} from "../../PicturesMainPage/PicturesMap/PicturesMap";
import {fetchGet} from "../../../../Components/functions/asyncFunctions";

export const MorePhotos = (props) => {
    const [pictures, setPictures] = useState([]);
    const url = `${process.env.REACT_APP_API_URL}/api/photostock/`;

    useEffect(() => {
        fetchGet(setPictures, url);
    }, []);
    return(
        <div className="photo-modal__photo">
            <h1>Больше фото</h1>
            <div className="photo-modal__photo__block">
                <PicturesMap pictures={pictures}/>
            </div>
        </div>
    );
};
