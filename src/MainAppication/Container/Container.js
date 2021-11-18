import React from "react";
import {Route} from "react-router-dom";
import {PicturesMainPage} from "./Pages/PicturesMainPage/PicturesMainPage";
import {Redirect, Switch} from "react-router";
import {PersonalPage} from "./Pages/PersonalPage/PersonalPage";
import {PersonalSettingsPage} from "./Pages/PersonalSettingsPage/PersonalSettingsPage";

export const Container = (props) => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={"/page"}/>
            </Route>
            <Route exact path={"/page"} render={() => <PicturesMainPage/>}/>
            <Route exact path={"/personal"} render={() => <PersonalPage/>}/>
            <Route exact path={"/personalSettings"} render={() => <PersonalSettingsPage/>}/>

        </Switch>

    );
};
