import React from "react";
import {PersonalAvatar} from "./PersonalAvatar/PersonalAvatar";
import {PersonalDescription} from "./PersonalDescription/PersonalDescription";

export const UserFullInfo = (props) => {
    let person = props.user;
    let subscribers = props.subscribers;
    return(
        <>
            <PersonalAvatar img={person?.profile_pic}/>
            <PersonalDescription profileName={person?.username} profileTag={person?.profileTag}
                                 profileDescription={person?.description}
                                 subscribers={subscribers?.subscribers} subscriptions={subscribers?.subscribed_to}
            />
        </>
    );
};
