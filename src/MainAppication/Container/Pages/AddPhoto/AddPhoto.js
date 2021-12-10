import React, {useState} from "react";
import {ElemsAddPhoto} from "./ElemsAddPhoto/ElemsAddPhoto";
import {AiOutlineClose} from "react-icons/all";
import {SettingsPhoto} from "./SettingsPhoto/SettingsPhoto";
import {NavLink} from "react-router-dom";
import {PICTURE_PAGE} from "../../../../UrlsConst";
import axios from "axios";
import {connect} from "react-redux";


const sendPhoto = (photo, access) => {
    const url = `${process.env.REACT_APP_API_URL}/api/post/`;
    let formData = new FormData();

    formData.append('name', photo.name);
    formData.append('description', photo.description);
    formData.append('price', photo.price);
    formData.append('tag', photo.tag);

    if (photo.series_photos[0].length !== 0) {

        for (let i = 0; i < photo.series_photos.length; i++) {
            formData.append(`series_photos[]`, photo.series_photos[i][0], photo.series_photos[i][0].name);
        }

        for (const [key, value] of formData) {
            console.log(key, value);
        }

        axios.post(url, formData, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${access}`,
            }
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }
}

const AddPhoto = (props) => {
    const [photo, setPhoto] = useState([]);
    const [photoUrl, setPhotoUrl] = useState();
    const [photoSetting, setPhotoSetting] = useState({
        name: "",
        description: "default",
        price: "",
        tag: [1],
        series_photos: []
    });

    const onChange = e => setPhotoSetting({...photoSetting, [e.target.name]: e.target.value});
    const upLoadPhoto = e => {setPhoto([...photo, e.target.files[0]]); setPhotoUrl(URL.createObjectURL(e.target.files[0]))};
    const onClickSubmit = () => {
        let photoUpt = {...photoSetting, series_photos: [photo],};
        sendPhoto(photoUpt, props.access);
    }

    return (
        <div className="add-photo-modal">
            <div className="add-photo">
                <div className="add-photo__close-button">
                    <NavLink to={PICTURE_PAGE}>
                        <AiOutlineClose style={{transform: "scale(2, 2)"}}/>
                    </NavLink>
                </div>
                <ElemsAddPhoto photoUrl={photoUrl} upLoadPhoto={upLoadPhoto} />
                <SettingsPhoto photoSetting={photoSetting} photo={photo} onChange={onChange} onClickSubmit={onClickSubmit}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {access: state.auth.access,}
};


export default connect(mapStateToProps)(AddPhoto);


