import React from "react";
import {Route} from "react-router";
import {PicturesMainPage} from "./Pages/PicturesMainPage/PicturesMainPage";
import {Redirect, Switch} from "react-router";
import PersonalPage from "./Pages/PersonalPage/PersonalPage";
import PersonalSettingsPage from "./Pages/PersonalSettingsPage/PersonalSettingsPage";
import {Cart} from "./Pages/Cart/Cart";
import {Collections} from "./Pages/Collections/Collections";
import {InformationAboutPhoto} from "./Pages/InformationAboutPhoto/InformationAboutPhoto";
import AddPhoto from "./Pages/AddPhoto/AddPhoto";
import {
    CART,
    COLLECTIONS,
    PICTURE_PAGE,
    PERSONAL,
    PERSONAL_SETTINGS,
    INFORMATION_ABOUT_PHOTO,
    ADD_PHOTO, VIEW_PHOTO, PERSONAL_GALLERY, PERSONAL_COLLECTIONS, PERSONAL_STATISTICS
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
            <Route exact path={PERSONAL_SETTINGS} render={() => <PersonalSettingsPage/>}/>
            <Route exact path={COLLECTIONS} render={() => <Collections/>}/>
            <Route exact path={CART} render={() => <Cart/>}/>
            <Route exact path={INFORMATION_ABOUT_PHOTO} render={() => <InformationAboutPhoto/>}/>
            <Route exact path={ADD_PHOTO} render={() => <AddPhoto/>}/>
            {/*  <Route exact path={VIEW_PHOTO} render={()=><ViewPhoto/>}/>*/}
        </Switch>

    );
};
