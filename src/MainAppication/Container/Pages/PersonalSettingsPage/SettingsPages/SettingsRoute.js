import React from "react";
import {PERSONAL_SETTINGS_ACCOUNT, PERSONAL_SETTINGS_PROFILE,} from "../../../../../UrlsConst";
import {AccountSettings} from "./AccountSettings/AccountSettings";
import {ProfileSettings} from "./ProfileSettings/ProfileSettings";

let languages = [
    {value: 1, label: "Русский"},
    {value: 2, label: "Український"},
    {value: 3, label: "English"},
];
let countries = [
    {value: 1, label: "Россия (РФ)"},
    {value: 2, label: "Украина"},
    {value: 3, label: "США"},
];
let sex = [
    {value: 1, label: "Мужчина"},
    {value: 2, label: "Женщина"},
    {value: 3, label: "Другое"},
];

export const SettingsRoute = ({settings}) => {

    return(
        <div>
            {settings === PERSONAL_SETTINGS_PROFILE && <ProfileSettings/>}
            {settings === PERSONAL_SETTINGS_ACCOUNT && <AccountSettings languages={languages} sex={sex} countries={countries}/>}

        </div>
    );
};
