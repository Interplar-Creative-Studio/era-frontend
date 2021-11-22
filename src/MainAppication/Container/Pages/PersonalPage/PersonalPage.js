import React from "react";
import {PersonalInfo} from "./PersonalInfo/PersonalInfo";
import {Route} from "react-router-dom";
import {Switch} from "react-router";
import {Gallery} from "./Gallery/Gallery";
import {PERSONAL_COLLECTIONS, PERSONAL_GALLERY, PERSONAL_STATISTICS} from "../../../../UrlsConst";
import {Collections} from "./Collections/Collections";
import {Statistics} from "./Statistics/Statistics";
import {PersonalMenu} from "./PersonalInfo/PersonalMenu/PersonalMenu";

let images = [
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
];
let menu = [
    {href: `/gallery`, text: "Галерея"},
    {href: `/collections`, text: "Коллекции"},
    {href: `/statistics`, text: "Статистика"},
];

export const PersonalPage = () => {
    return (
        <div className="container">
            <div className="personal-area">
                <PersonalInfo/>
                <PersonalMenu menu={menu}/>
                   {/* <Gallery images={images}/>*/}
                    <Switch>
                        <Route path={PERSONAL_GALLERY} render={() => <Gallery images={images}/>}/>
                        <Route path={PERSONAL_COLLECTIONS} render={() => <Collections/>}/>
                        <Route path={PERSONAL_STATISTICS} render={() => <Statistics/>}/>
                    </Switch>
            </div>
        </div>
    );
};
