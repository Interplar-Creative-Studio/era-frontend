import React from "react";
import {Share} from "../../../../Components/Icons/Share";
import {Settings} from "../../../../Components/Icons/Settings";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {UserFullInfo} from "./UserFullInfo/UserFullInfo";
import {PERSONAL_SETTINGS} from "../../../../../UrlsConst";
import {PersonalMenu} from "./PersonalMenu/PersonalMenu";


let person = {
    profileName: "Top Waifu",
    profileTag : "@topwaifu",
    profileDescription: "Самая топовая вайфу твоего района",
    subscribers:  "5.1m",
    subscriptions: 246,
};




export const PersonalInfo = (props) => {
    return (
            <div className="personal-area__profile">
                <div className="personal-area__profile__description">
                    <UserFullInfo person={person} img={"assets/img/testImg2.png"}/>
                    <div className="personal-area__profile__description__icons">
                        <Share color={"black"}/>
                        <Settings color={"black"} href={PERSONAL_SETTINGS}/>
                        <MoreOptions color={"black"}/>
                    </div>
                </div>
            </div>

    );
};
