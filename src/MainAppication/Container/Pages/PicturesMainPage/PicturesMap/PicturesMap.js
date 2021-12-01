import React, {useEffect, useState} from "react";
import {Picture} from "../Picture/Picture";
import {fetchGet} from "../../../../Components/functions/asyncFunctions";
import ViewPhoto from "../../ViewPhoto/ViewPhoto";


export const PicturesMap = (props) => {
    const [pictures, setPictures] = useState([]);
    const [pictureId, setPictureId] = useState(0);
    const [showPictures, setShowPictures] = useState(false);
    const url = `${process.env.REACT_APP_API_URL}/api/photostock/`;

    useEffect(() => {
        fetchGet(setPictures, url);
    }, []);

    const onClick = () => {
        setShowPictures(!showPictures);
    };

    const onClickPictureId =(id)=>{
        setPictureId(id);
    }

    return (
        <div className="main main-first">
            <div className="picture__page">
                {pictures.map((pic, i) => <Picture key={i} id={pic.id} imgLink={pic.imgLink ?? "#"}
                                                   img={`${process.env.REACT_APP_API_URL}${pic.series_photos[0]?.photo}`}
                                                   pictureNameLink={"#"} onClick={onClick} onClickPictureId={onClickPictureId}
                                                   pictureName={pic.name}/>)}
            </div>
            {showPictures && <ViewPhoto pictureId={pictureId} onClick={onClick}/>}
        </div>
    );
};
