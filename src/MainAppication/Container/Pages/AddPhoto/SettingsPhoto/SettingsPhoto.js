import React from "react";
import {PhotoDescription} from "../Pages/PhotoDescription/PhotoDescription";
import {PhotoSettings} from "../Pages/PhotoSettings/PhotoSettings";
import {AddPhotoMenu} from "../AddPhotoMenu/AddPhotoMenu";
import {useQuery} from "../../../../Components/functions/functions";
import {
    ADD_PHOTO_SETTINGS_MONETIZATION,
    ADD_PHOTO_SETTINGS_PHOTO,
    ADD_PHOTO_SETTINGS_SERIES
} from "../../../../../UrlsConst";
import {PhotoMonetization} from "../Pages/PhotoMonetization/PhotoMonetization";

export const SettingsPhoto = (props) => {
    let query = useQuery();
    let settings = query.get("settings");
    return(
        <div className="add-photo__description">
            <div className="personal-area__settings__area">
                {settingsRoute(settings, props.onChange, props.photoSetting)}
            </div>
            <AddPhotoMenu onClickSubmit={props.onClickSubmit}/>
        </div>
    );
};

function settingsRoute(settings, onChange, photoSetting) {
    switch (settings) {
        case ADD_PHOTO_SETTINGS_PHOTO:
            return <PhotoDescription onChange={onChange} photoSetting={photoSetting}/>;
        case ADD_PHOTO_SETTINGS_SERIES:
            return <PhotoSettings onChange={onChange} photoSetting={photoSetting}/>;
        case ADD_PHOTO_SETTINGS_MONETIZATION:
            return <PhotoMonetization onChange={onChange} photoSetting={photoSetting}/>
    }
}