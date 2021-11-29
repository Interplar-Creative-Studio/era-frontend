import React, {useEffect, useState} from "react";
import {Picture} from "../Picture/Picture";


function getPhotos(setPictures) {
    const url = `${process.env.REACT_APP_API_URL}/api/photostock/`;
    fetch(url).then(response => response.json().then(res => setPictures(res)));
}

export const PicturesMap = (props) => {
    const [pictures, setPictures] = useState([]);
    useEffect(() => {
        getPhotos(setPictures);
    }, []);

    return (
        <div className="main main-first">
            <div className="picture__page">
                {pictures.map((pic, i) => <Picture key={i} id={pic.id} imgLink={pic.imgLink ?? "#"}
                                                                   img={`${process.env.REACT_APP_API_URL}${pic.series_photos[0]?.photo}`}
                                                                   pictureNameLink={"#"}
                                                                   pictureName={pic.name}/>)}
            </div>
        </div>
    );
};
