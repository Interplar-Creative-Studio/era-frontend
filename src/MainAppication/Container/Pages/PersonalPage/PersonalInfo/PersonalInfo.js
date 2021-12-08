import React, {useEffect, useState} from "react";
import {Share} from "../../../../Components/Icons/Share";
import {Settings} from "../../../../Components/Icons/Settings";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {UserFullInfo} from "./UserFullInfo/UserFullInfo";
import {PERSONAL_SETTINGS, PERSONAL_SETTINGS_PROFILE} from "../../../../../UrlsConst";
import {connect} from "react-redux";
import {fetchGet} from "../../../../Components/functions/asyncFunctions";


const PersonalInfo = (props) => {
    let user = props.user;
    const [subscribers, setSubscribers] = useState(0);
    useEffect(()=>{
        const url = `${process.env.REACT_APP_API_URL}/api/user/subscribers/${user?.id ?? 0}`;
        fetchGet(setSubscribers, url);
    }, [user?.id]);
    
    return (
            <div className="personal-area__profile">
                <div className="personal-area__profile__description">
                    <UserFullInfo user={user}  subscribers={subscribers}/>
                    <div className="personal-area__profile__description__icons">
                        <Share color={"black"}/>
                        <Settings color={"black"} href={`${PERSONAL_SETTINGS_PROFILE}`}/>
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