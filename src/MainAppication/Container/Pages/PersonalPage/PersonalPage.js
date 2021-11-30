import React, {useEffect, useState} from "react";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Gallery from "./Gallery/Gallery";
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
import {connect} from "react-redux";
import {fetchGet} from "../../../Components/functions/asyncFunctions";

let images = [
    {imgLink: "#", img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption", views: 123, likes: 45},
];

let collections = [
    {imgLink: COLLECTIONS, img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption"},
    {imgLink: COLLECTIONS, img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption"},
    {imgLink: COLLECTIONS, img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption"},
    {imgLink: COLLECTIONS, img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption"},
    {imgLink: COLLECTIONS, img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption"},
    {imgLink: COLLECTIONS, img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption"},
    {imgLink: COLLECTIONS, img: "https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg", pictureName: "Caption caption"},
];

let menu = [
    {href: `${PERSONAL}?name=${PERSONAL_GALLERY}`, text: "Галерея"},
    {href: `${PERSONAL}?name=${PERSONAL_COLLECTIONS}`, text: "Коллекции"},
    {href: `${PERSONAL}?name=${PERSONAL_STATISTICS}`, text: "Статистика"},
];


const PersonalPage = (props) => {
    let query = useQuery();
    const [userGallery, setUserGallery] = useState([]);
    const url = `${process.env.REACT_APP_API_URL}/api/userposts/${props.user?.id ?? 0}`;
    useEffect(() => {
        fetchGet(setUserGallery, url);
    }, []);
    let user = props.user;

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

const mapStateToProps = (state) => {
    return {user: state.auth.user,}
}

export default connect(mapStateToProps)(PersonalPage);

function Child({name, user}) {
    //TODO:: заменить сравнения строк
    return (
        <div>
            {name === PERSONAL_GALLERY && <Gallery images={images}/>}
            {name === PERSONAL_COLLECTIONS && <Collections collections={collections} user={user}/>}
            {name === PERSONAL_STATISTICS && <Statistics/>}
        </div>
    );
}