import React from "react";
import {PersonalInfo} from "./PersonalInfo/PersonalInfo";
import {useLocation} from "react-router-dom";
import {Gallery} from "./Gallery/Gallery";
import {PERSONAL, PERSONAL_COLLECTIONS, PERSONAL_GALLERY, PERSONAL_STATISTICS} from "../../../../UrlsConst";
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
/*let menu = [
    {href: `/gallery`, text: "Галерея"},
    {href: `/collections`, text: "Коллекции"},
    {href: `/statistics`, text: "Статистика"},
];*/

let menu = [
    {href: `${PERSONAL}?name=${PERSONAL_GALLERY}`, text: "Галерея"},
    {href: `${PERSONAL}?name=${PERSONAL_COLLECTIONS}`, text: "Коллекции"},
    {href: `${PERSONAL}?name=${PERSONAL_STATISTICS}`, text: "Статистика"},
];
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

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
            {name === PERSONAL_COLLECTIONS && <Collections/>}
            {name === PERSONAL_STATISTICS && <Statistics/>}
        </div>
    );
}