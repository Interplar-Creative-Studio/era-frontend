import React from "react";
import {PersonalAvatar} from "./PersonalAvatar/PersonalAvatar";
import {PersonalDescription} from "./PersonalDescription/PersonalDescription";

export const UserFullInfo = (props) => {
    let person = props.user;
    return(
        <>
            <PersonalAvatar img={person?.profile_pic}/>
            <PersonalDescription profileName={person?.username} profileTag={person?.profileTag}
                                 profileDescription={person?.description}
                                 subscribers={person?.subscribers} subscriptions={person?.subscriptions}
            />
        </>
    );
};
