import React from "react";
import {PERSONAL_SETTINGS_ACCOUNT, PERSONAL_SETTINGS_PROFILE,} from "../../../../../UrlsConst";
import {AccountSettings} from "./AccountSettings/AccountSettings";
import {ProfileSettings} from "./ProfileSettings/ProfileSettings";
import {Route, Switch} from "react-router";


export const SettingsRoute = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path={PERSONAL_SETTINGS_PROFILE} render={()=><ProfileSettings onChange={props.onChangeUserSettings} user={props.user}/>}/>
                <Route exact path={PERSONAL_SETTINGS_ACCOUNT} render={()=><AccountSettings onChange={props.onChangeUserSettings} user={props.user}/>}/>
            </Switch>
        </div>
    );
}