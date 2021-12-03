import React, {useState} from "react";
import {Picture} from "../Picture/Picture";
import ViewPhoto from "../../ViewPhoto/ViewPhoto";


export const PicturesMap = (props) => {
    let pictures = props.pictures;
    const [pictureId, setPictureId] = useState(0);

    const onClickPictureId = (id) => {
        setPictureId(id);
    };

    return (
        <div className="main main-first">
            <div className="picture__page">
                {pictures.map((pic, i) => <Picture key={i} id={pic.id} imgLink={pic.imgLink ?? "#"}
                                                   img={`${process.env.REACT_APP_API_URL}${pic?.series_photos[0]?.photo}`}
                                                   pictureNameLink={"#"} onClick={props.onClick}
                                                   onClickPictureId={onClickPictureId}
                                                   pictureName={pic.name}/>)}
            </div>
            {props.showPictures && <ViewPhoto pictureId={pictureId} onClick={props.onClick}/>}
        </div>
    );
};
