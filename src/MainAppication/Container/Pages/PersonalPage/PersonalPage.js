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
import Collections from "./Collections/Collections";
import {Statistics} from "./Statistics/Statistics";
import {PersonalMenu} from "./PersonalInfo/PersonalMenu/PersonalMenu";
import {useQuery} from "../../../Components/functions/functions";
import {connect} from "react-redux";
import {Switch} from "react-router";
import {Route} from "react-router";


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
    {href: `${PERSONAL_GALLERY}`, text: "Галерея"},
    {href: `${PERSONAL_COLLECTIONS}`, text: "Коллекции"},
    {href: `${PERSONAL_STATISTICS}`, text: "Статистика"},
];


const PersonalPage = (props) => {
    let query = useQuery();
    return (
        <div className="container">
            <div className="personal-area">
                <PersonalInfo/>
                <PersonalMenu menu={menu}/>
                {/*<Child name={query.get("name")} />*/}
                <Switch>
                    <Route path={PERSONAL_GALLERY} render={()=> <Gallery/>}/>
                    <Route exact path={PERSONAL_COLLECTIONS}
                           render={()=> <Collections collections={collections} user={props.user}/>}/>
                    <Route exact path={PERSONAL_STATISTICS} render={()=> <Statistics/>} />
                </Switch>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {user: state.auth.user,}
}

export default connect(mapStateToProps)(PersonalPage);

function Child({name, user}) {
    return (
        <div>
            {name === PERSONAL_GALLERY && <Gallery/>}
            {name === PERSONAL_COLLECTIONS && <Collections collections={collections} user={user}/>}
            {name === PERSONAL_STATISTICS && <Statistics/>}
        </div>
    );
}