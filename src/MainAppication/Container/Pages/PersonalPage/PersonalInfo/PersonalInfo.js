import React from "react";
import {Share} from "../../../../Components/Icons/Share";
import {Settings} from "../../../../Components/Icons/Settings";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {UserFullInfo} from "./UserFullInfo/UserFullInfo";
import {MenuMap} from "../../../../Components/MenuElement/MenuMap";
import {PERSONAL_SETTINGS} from "../../../../../UrlsConst";


let person = {
    profileName: "Top Waifu",
    profileTag : "@topwaifu",
    profileDescription: "Самая топовая вайфу твоего района",
    subscribers:  "5.1m",
    subscriptions: 246,
};

let menu = [
    {href: `/gallery`, text: "Галерея"},
    {href: `/collections`, text: "Коллекции"},
    {href: `/statistics`, text: "Статистика"},
];


export const PersonalInfo = (props) => {


    return (
        <div>
            <div className="personal-area__profile">
                <div className="personal-area__profile__description">
                    <UserFullInfo person={person} img={"assets/img/testImg4.png"}/>
                    <div className="personal-area__profile__description__icons">
                        <Share color={"black"}/>
                        <Settings color={"black"} href={PERSONAL_SETTINGS}/>
                        <MoreOptions color={"black"}/>
                    </div>
                </div>
            </div>
            <div className="personal-area__menu">
                <ul>
                    <MenuMap arr={menu}/>
                </ul>
            </div>
        </div>
    );
};
