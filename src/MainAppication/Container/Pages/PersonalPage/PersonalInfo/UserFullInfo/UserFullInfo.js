import React from "react";
import {PersonalAvatar} from "./PersonalAvatar/PersonalAvatar";
import {PersonalDescription} from "./PersonalDescription/PersonalDescription";

export const UserFullInfo = (props) => {
    let person = props.person;
    return(
        <>
            <PersonalAvatar img={props.img}/>
            <PersonalDescription profileName={person.profileName} profileTag={person.profileTag}
                                 profileDescription={person.profileDescription}
                                 subscribers={person.subscribers} subscriptions={person.subscriptions}
            />
        </>
    );
};
