import React from "react";
import {Share} from "../../../../Components/Icons/Share";
import {Settings} from "../../../../Components/Icons/Settings";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {UserFullInfo} from "./UserFullInfo/UserFullInfo";
import {PERSONAL_SETTINGS, PERSONAL_SETTINGS_PROFILE} from "../../../../../UrlsConst";
import {connect} from "react-redux";

let person = {
    profileName: "Top Waifu",
    profileTag : "@topwaifu",
    profileDescription: "Самая топовая вайфу твоего района",
    subscribers:  "5.1m",
    subscriptions: 246,
};


const PersonalInfo = (props) => {
    let user = props.user;

    return (
            <div className="personal-area__profile">
                <div className="personal-area__profile__description">
                    <UserFullInfo user={user} img={"assets/img/testImg2.png"}/>
                    <div className="personal-area__profile__description__icons">
                        <Share color={"black"}/>
                        <Settings color={"black"} href={`${PERSONAL_SETTINGS}?settings=${PERSONAL_SETTINGS_PROFILE}`}/>
                        <MoreOptions color={"black"}/>
                    </div>
                </div>
            </div>

    );
};

const mapStateToProps = (state) =>{
    return {user: state.auth.user,}
}

export default connect(mapStateToProps)(PersonalInfo);