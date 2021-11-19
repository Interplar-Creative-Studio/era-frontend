import React from "react";
import {Verify} from "../../../../../Components/Icons/Verify";

export const PersonalDescription = (props) => {
    return(
        <div className="personal-area__profile__description__info">
            <div className="personal-area__profile__description__info__name">
                <h2>{props.profileName}</h2>
                <Verify/>
                <p>{props.profileTag}</p>
            </div>
            <div className="personal-area__profile__description__info__text">
                <p>{props.profileDescription}</p>
            </div>
            <div className="personal-area__profile__description__info__sub">
                <p>Подписчики<span>{props.subscribers}</span></p>
                <p>Подписки<span>{props.subscriptions}</span></p>
            </div>
        </div>
    );
};
