import React, {useState} from "react";
import {ElemsAddPhoto} from "./ElemsAddPhoto/ElemsAddPhoto";
import {AiOutlineClose} from "react-icons/all";
import {SettingsPhoto} from "./SettingsPhoto/SettingsPhoto";
import {NavLink} from "react-router-dom";
import {PICTURE_PAGE} from "../../../../UrlsConst";

const sendPhoto = (photo) => {
    const url = `${process.env.REACT_APP_API_URL}/api/post/`;
    let formData = new FormData();

    formData.append('name', photo.name);
    formData.append('description', photo.description);
    formData.append('price', photo.price);
    formData.append('tag', photo.tag);
    formData.append('series_photos', photo.series_photos);


    for (const [key, value] of formData) {
        console.log(key, value);
    }
    console.log("formData: ", formData);
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'multipart/form-data',
            /*'Accept': 'application/json'*/
        },
        body: formData,

    }).then(res => res.json().then(r=>console.log(r)))
}

export const AddPhoto = (props) => {
    const [photo, setPhoto] = useState(null);
    const [photoSetting, setPhotoSetting] = useState({
        name: "POPOPOP",
        description: "SDFDSFDS",
        price: 228,
        tag: [1],
        series_photos: []
    });

    const onChange = e => setPhotoSetting({...photoSetting, [e.target.name]: e.target.value});
    const upLoadPhoto = e => setPhoto(e.target.files[0]);
    const onClickSubmit = () => {
        // debugger;
        let photoUpt = {...photoSetting, series_photos: [photo]};
        console.log("photoSetting:", photoUpt);
        sendPhoto(photoUpt);

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


