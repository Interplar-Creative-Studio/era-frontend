import React from "react";
import {Route} from "react-router-dom";
import {PicturesMainPage} from "./Pages/PicturesMainPage/PicturesMainPage";
import {Redirect, Switch} from "react-router";
import {PersonalPage} from "./Pages/PersonalPage/PersonalPage";
import {PersonalSettingsPage} from "./Pages/PersonalSettingsPage/PersonalSettingsPage";
import {CART, COLLECTIONS, PAGE, PERSONAL, PERSONAL_SETTINGS} from "../../UrlsConst";
import {Cart} from "./Pages/Cart/Cart";
import {Collections} from "./Pages/Collections/Collections";


export const Container = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={PERSONAL}/>
            </Route>
            <Route path={PAGE} render={() => <PicturesMainPage/>}/>
            <Route path={PERSONAL} render={() => <PersonalPage/>}/>
            <Route path={PERSONAL_SETTINGS} render={() => <PersonalSettingsPage/>}/>
            <Route path={COLLECTIONS} render={() => <Collections/>}/>
            <Route path={CART} render={()=><Cart/>}/>
        </Switch>

    );
};
