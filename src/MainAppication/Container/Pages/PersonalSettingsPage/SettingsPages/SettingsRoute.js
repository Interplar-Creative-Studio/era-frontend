import React from "react";
import {PERSONAL_SETTINGS_ACCOUNT, PERSONAL_SETTINGS_PROFILE,} from "../../../../../UrlsConst";
import {AccountSettings} from "./AccountSettings/AccountSettings";
import {ProfileSettings} from "./ProfileSettings/ProfileSettings";
import {Route, Switch} from "react-router";


const SettingsRoute1 = ({user, settings}) => {

    return (
        <div>
            {settings === PERSONAL_SETTINGS_PROFILE && <ProfileSettings user={user}/>}
            {settings === PERSONAL_SETTINGS_ACCOUNT && <AccountSettings user={user}/>}
        </div>
    );
};

export const SettingsRoute = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path={PERSONAL_SETTINGS_PROFILE} render={()=><ProfileSettings user={props.user}/>}/>
                <Route exact path={PERSONAL_SETTINGS_ACCOUNT} render={()=><AccountSettings user={props.user}/>}/>
            </Switch>
        </div>
    );
}