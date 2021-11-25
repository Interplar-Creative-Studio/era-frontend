import React from "react";
import {PersonalInfo} from "./PersonalInfo/PersonalInfo";
import {Gallery} from "./Gallery/Gallery";
import {
    COLLECTIONS,
    PERSONAL,
    PERSONAL_COLLECTIONS,
    PERSONAL_GALLERY,
    PERSONAL_STATISTICS
} from "../../../../UrlsConst";
import {Collections} from "./Collections/Collections";
import {Statistics} from "./Statistics/Statistics";
import {PersonalMenu} from "./PersonalInfo/PersonalMenu/PersonalMenu";
import {useQuery} from "../../../Components/functions/functions";

let images = [
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
];

let collections = [
    {imgLink: COLLECTIONS, img: "assets/img/testImg4.png", pictureName: "Caption caption"},
    {imgLink: COLLECTIONS, img: "assets/img/testImg4.png", pictureName: "Caption caption"},
    {imgLink: COLLECTIONS, img: "assets/img/testImg4.png", pictureName: "Caption caption"},
    {imgLink: COLLECTIONS, img: "assets/img/testImg4.png", pictureName: "Caption caption"},
    {imgLink: COLLECTIONS, img: "assets/img/testImg4.png", pictureName: "Caption caption"},
    {imgLink: COLLECTIONS, img: "assets/img/testImg4.png", pictureName: "Caption caption"},
    {imgLink: COLLECTIONS, img: "assets/img/testImg4.png", pictureName: "Caption caption"},
];

let menu = [
    {href: `${PERSONAL}?name=${PERSONAL_GALLERY}`, text: "Галерея"},
    {href: `${PERSONAL}?name=${PERSONAL_COLLECTIONS}`, text: "Коллекции"},
    {href: `${PERSONAL}?name=${PERSONAL_STATISTICS}`, text: "Статистика"},
];


export const PersonalPage = () => {
    let query = useQuery();
    return (
        <div className="container">
            <div className="personal-area">
                <PersonalInfo/>
                <PersonalMenu menu={menu}/>
                <Child name={query.get("name")} />
            </div>
        </div>
    );
};

function Child({ name }) {
    //TODO:: заменить сравнения строк
    return (
        <div>
            {name === PERSONAL_GALLERY && <Gallery images={images}/>}
            {name === PERSONAL_COLLECTIONS && <Collections collections={collections}/>}
            {name === PERSONAL_STATISTICS && <Statistics/>}
        </div>
    );
}