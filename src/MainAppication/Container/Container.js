import React from "react";
import {Route} from "react-router";
import PicturesMainPage from "./Pages/PicturesMainPage/PicturesMainPage";
import {Redirect, Switch} from "react-router";
import PersonalPage from "./Pages/PersonalPage/PersonalPage";
import PersonalSettingsPage from "./Pages/PersonalSettingsPage/PersonalSettingsPage";
import {Cart} from "./Pages/Cart/Cart";
import InfoAboutCollections from "./Pages/Collections/InfoAboutCollections";
import AddPhoto from "./Pages/AddPhoto/AddPhoto";
import {
    CART,
    COLLECTIONS,
    PICTURE_PAGE,
    PERSONAL,
    PERSONAL_SETTINGS,
    ADD_PHOTO,
    PERSONAL_GALLERY,
    PERSONAL_COLLECTIONS,
    PERSONAL_STATISTICS,
    VERIFY,
    PERSONAL_SETTINGS_PROFILE,
    PERSONAL_SETTINGS_ACCOUNT
} from "../../UrlsConst";


export const Container = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={PICTURE_PAGE}/>
            </Route>
            <Route exact path={PICTURE_PAGE} render={() => <PicturesMainPage/>}/>
            <Route exact path={[PERSONAL, PERSONAL_GALLERY, PERSONAL_COLLECTIONS, PERSONAL_STATISTICS]}
                   render={() => <PersonalPage/>}/>
            <Route exact path={[PERSONAL_SETTINGS, PERSONAL_SETTINGS_PROFILE, PERSONAL_SETTINGS_ACCOUNT]}
                   render={() => <PersonalSettingsPage/>}/>
            <Route exact path={COLLECTIONS} render={() => <InfoAboutCollections/>}/>
            <Route exact path={CART} render={() => <Cart/>}/>
            <Route exact path={ADD_PHOTO} render={() => <AddPhoto/>}/>
        </Switch>

    );
};
