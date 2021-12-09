import React from "react";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Gallery from "./Gallery/Gallery";
import {
    PERSONAL_COLLECTIONS,
    PERSONAL_GALLERY,
    PERSONAL_STATISTICS
} from "../../../../UrlsConst";
import Collections from "./Collections/Collections";
import {Statistics} from "./Statistics/Statistics";
import {PersonalMenu} from "./PersonalInfo/PersonalMenu/PersonalMenu";
import {connect} from "react-redux";
import {Switch} from "react-router";
import {Route} from "react-router";


let menu = [
    {href: `${PERSONAL_GALLERY}`, text: "Галерея"},
    {href: `${PERSONAL_COLLECTIONS}`, text: "Фотоархив"},
    {href: `${PERSONAL_STATISTICS}`, text: "Статистика"},
];


const PersonalPage = (props) => {
    return (
        <div className="container">
            <div className="personal-area">
                <PersonalInfo/>
                <PersonalMenu menu={menu}/>
                <Switch>
                    <Route path={PERSONAL_GALLERY} render={()=> <Gallery/>}/>
                    <Route exact path={PERSONAL_COLLECTIONS}
                           render={()=> <Collections user={props.user}/>}/>
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
