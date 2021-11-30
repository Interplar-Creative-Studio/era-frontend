import React from "react";
import {PERSONAL_SETTINGS_ACCOUNT, PERSONAL_SETTINGS_PROFILE,} from "../../../../../UrlsConst";
import {AccountSettings} from "./AccountSettings/AccountSettings";
import {ProfileSettings} from "./ProfileSettings/ProfileSettings";



export const SettingsRoute = ({user, settings}) => {

    return(
        <div>
            {settings === PERSONAL_SETTINGS_PROFILE && <ProfileSettings user={user}/>}
            {settings === PERSONAL_SETTINGS_ACCOUNT && <AccountSettings user={user} />}

        </div>
    );
};
