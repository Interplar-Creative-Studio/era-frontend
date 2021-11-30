import React, {useState} from "react";
import {ElemsAddPhoto} from "./ElemsAddPhoto/ElemsAddPhoto";
import {AiOutlineClose} from "react-icons/all";
import {useQuery} from "../../../Components/functions/functions";
import {SettingsPhoto} from "./SettingsPhoto/SettingsPhoto";
import {NavLink} from "react-router-dom";
import {PICTURE_PAGE} from "../../../../UrlsConst";

const sendPhoto = (photo) => {
    const url = `${process.env.REACT_APP_API_URL}/api/post/`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(photo),

    }).then(r => r);
}

export const AddPhoto = (props) => {
    const [photo, setPhoto] = useState( {});
    const [photoSetting, setPhotoSetting] = useState({
        name: "",
        description: "",
        price: 0,
        tag: "",
        series_photos: []
    });

    const onChange = e => setPhotoSetting({...photoSetting, [e.target.name]: e.target.value});
    const upLoadPhoto = e => setPhoto({photo: e.target.value});
    const onClickSubmit = () => {
        let photo_upt = {...photoSetting, series_photos: [photo], tag: photoSetting.tag.split(" ")};
        sendPhoto(photo_upt);
        console.log("photoSetting:", photo_upt);
    }
    /*
    console.log("photoSetting: ", photoSetting);
    console.log("photo: ", photo);*/
    return (
        <div className="add-photo-modal">
            <div className="add-photo">
                <div className="add-photo__close-button">
                    <NavLink to={PICTURE_PAGE}>
                        <AiOutlineClose style={{transform: "scale(2, 2)"}}/>
                    </NavLink>
                </div>
                <ElemsAddPhoto photo={photo} upLoadPhoto={upLoadPhoto}/>
                <SettingsPhoto onChange={onChange} onClickSubmit={onClickSubmit}/>
            </div>
        </div>
    );
};


