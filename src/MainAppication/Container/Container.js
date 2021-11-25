import React from "react";
import {Route} from "react-router-dom";
import {PicturesMainPage} from "./Pages/PicturesMainPage/PicturesMainPage";
import {Redirect, Switch} from "react-router";
import {PersonalPage} from "./Pages/PersonalPage/PersonalPage";
import {PersonalSettingsPage} from "./Pages/PersonalSettingsPage/PersonalSettingsPage";
import {Cart} from "./Pages/Cart/Cart";
import {Collections} from "./Pages/Collections/Collections";
import {InformationAboutPhoto} from "./Pages/InformationAboutPhoto/InformationAboutPhoto";
import {AddPhoto} from "./Pages/AddPhoto/AddPhoto";
import {
    CART,
    COLLECTIONS,
    PICTURE_PAGE,
    PERSONAL,
    PERSONAL_SETTINGS,
    INFORMATION_ABOUT_PHOTO,
    ADD_PHOTO
} from "../../UrlsConst";


export const Container = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={ADD_PHOTO}/>
            </Route>
            <Route path={PICTURE_PAGE} render={() => <PicturesMainPage/>}/>
            <Route path={PERSONAL} render={() => <PersonalPage/>}/>
            <Route path={PERSONAL_SETTINGS} render={() => <PersonalSettingsPage/>}/>
            <Route path={COLLECTIONS} render={() => <Collections/>}/>
            <Route path={CART} render={()=><Cart/>}/>
            <Route path={INFORMATION_ABOUT_PHOTO} render={()=><InformationAboutPhoto/>}/>
            <Route path={ADD_PHOTO} render={()=><AddPhoto/>}/>

        </Switch>

    );
};
