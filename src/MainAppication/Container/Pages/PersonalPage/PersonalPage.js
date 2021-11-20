import React from "react";
import {PersonalInfo} from "./PersonalInfo/PersonalInfo";
import {Route, useRouteMatch} from "react-router-dom";
import {Redirect, Switch} from "react-router";
import {Gallery} from "./Gallery/Gallery";
import {PERSONAL, PERSONAL_COLLECTIONS, PERSONAL_GALLERY, PERSONAL_STATISTICS} from "../../../../UrlsConst";
import {Collections} from "./Collections/Collections";
import {Statistics} from "./Statistics/Statistics";

let images = [
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
];


export const PersonalPage = () => {
    return (
        <div className="container">
            <div className="personal-area">
                <PersonalInfo/>
                    <Gallery images={images}/>
              {/*      <Switch>
                        <Route exact path={PERSONAL}>
                            <Redirect to={PERSONAL_GALLERY}/>
                        </Route>
                        <Route path={PERSONAL_GALLERY} render={() => <Gallery images={images}/>}/>
                        <Route path={PERSONAL_COLLECTIONS} render={() => <Collections/>}/>
                        <Route path={PERSONAL_STATISTICS} render={() => <Statistics/>}/>
                    </Switch>*/}
            </div>
        </div>
    );
};
