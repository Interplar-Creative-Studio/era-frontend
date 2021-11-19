import React from "react";
import {Share} from "../../../../Components/Icons/Share";
import {Settings} from "../../../../Components/Icons/Settings";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {PersonalDescription} from "./PersonalDescription/PersonalDescription";
import {MenuElement} from "../../../../Components/MenuElement/MenuElement";
import {PersonalAvatar} from "./PersonalAvatar/PersonalAvatar";

let menu = [
    {href: "#", text: "Галерея"},
    {href: "#", text: "Коллекции"},
    {href: "#", text: "Статистика"},
];
let person = {
    profileName: "Top Waifu",
    profileTag : "@topwaifu",
    profileDescription: "Самая топовая вайфу твоего района",
    subscribers:  "5.1m",
    subscriptions: 246,
};
export const PersonalInfo = (props) => {
    return (
        <div>
            <div className="personal-area__profile">
                <div className="personal-area__profile__description">
                    <PersonalAvatar img={"assets/img/testImg4.png"}/>
                    <PersonalDescription profileName={person.profileName} profileTag={person.profileTag}
                                         profileDescription={person.profileDescription}
                                         subscribers={person.subscribers} subscriptions={person.subscriptions}
                    />
                    <div className="personal-area__profile__description__icons">
                        <Share/>
                        <Settings/>
                        <MoreOptions/>
                    </div>
                </div>
            </div>
            <div className="personal-area__menu">
                <ul>
                    {menu.map(elem => <MenuElement menulink={elem.href} menuName={elem.text}/>)}
                </ul>
            </div>
        </div>
    );
};
