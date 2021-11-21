import React from "react";
import {Share} from "../../../../Components/Icons/Share";
import {Settings} from "../../../../Components/Icons/Settings";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {MenuElement} from "../../../../Components/MenuElement/MenuElement";
import {useRouteMatch} from "react-router-dom";
import {UserFullInfo} from "./UserFullInfo/UserFullInfo";


let person = {
    profileName: "Top Waifu",
    profileTag : "@topwaifu",
    profileDescription: "Самая топовая вайфу твоего района",
    subscribers:  "5.1m",
    subscriptions: 246,
};
export const PersonalInfo = (props) => {
    const { url, path } = useRouteMatch();

    let menu = [
        {href: `${url}/gallery`, text: "Галерея"},
        {href: `${url}/collections`, text: "Коллекции"},
        {href: `${url}/statistics`, text: "Статистика"},
    ];

    return (
        <div>
            <div className="personal-area__profile">
                <div className="personal-area__profile__description">
                    <UserFullInfo person={person} img={"assets/img/testImg4.png"}/>
                    <div className="personal-area__profile__description__icons">
                        <Share color={"black"}/>
                        <Settings color={"black"}/>
                        <MoreOptions color={"black"}/>
                    </div>
                </div>
            </div>
            <div className="personal-area__menu">
                <ul>
                    {menu.map((elem, i) => <MenuElement key={i} menulink={elem.href} menuName={elem.text}/>)}
                </ul>
            </div>
        </div>
    );
};
