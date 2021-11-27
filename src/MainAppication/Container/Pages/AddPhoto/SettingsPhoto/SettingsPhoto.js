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

export const SettingsPhoto = (props) => {
    let query = useQuery();
    let settings = query.get("settings");
    return(
        <div className="add-photo__description">
            <div className="personal-area__settings__area">
                {settingsRoute(settings)}
            </div>
            <AddPhotoMenu/>
        </div>
    );
};

function settingsRoute(settings) {
    switch (settings) {
        case ADD_PHOTO_SETTINGS_PHOTO:
            return <PhotoDescription/>;
        case ADD_PHOTO_SETTINGS_SERIES:
            return <PhotoSettings/>;
        case ADD_PHOTO_SETTINGS_MONETIZATION:
            return "В разработке"
    }
}