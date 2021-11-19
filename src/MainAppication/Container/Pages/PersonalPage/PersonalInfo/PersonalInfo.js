import React from "react";
import {Share} from "../../../../Components/Icons/Share";
import {Settings} from "../../../../Components/Icons/Settings";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";

export const PersonalInfo = (props) => {
    return (
        <div>
            <div className="personal-area__profile">
                <div className="personal-area__profile__description"><img alt={""} src="assets/img/testImg4.png"/>
                    <div className="personal-area__profile__description__info">
                        <div className="personal-area__profile__description__info__name">
                            <h2>Top Waifu</h2>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 0H0V24H24V0Z" fill="white" fill-opacity="0.01"/>
                                <path
                                    d="M11.9999 2L14.6266 3.91602L17.8778 3.90983L18.8766 7.00385L21.5105 8.90985L20.4999 12L21.5105 15.0901L18.8766 16.9961L17.8778 20.0902L14.6266 20.084L11.9999 22L9.37329 20.084L6.12209 20.0902L5.1233 16.9961L2.48938 15.0901L3.49994 12L2.48938 8.90985L5.1233 7.00385L6.12209 3.90983L9.37329 3.91602L11.9999 2Z"
                                    stroke="black" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.5 12L11 14.5L16 9.5" stroke="black" stroke-width="2" stroke-linecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                            <p>@topwaifu</p>
                        </div>
                        <div className="personal-area__profile__description__info__text">
                            <p>Самая топовая вайфу твоего района</p>
                        </div>
                        <div className="personal-area__profile__description__info__sub">
                            <p>Подписчики<span>5.1m</span></p>
                            <p>Подписки<span>246</span></p>
                        </div>
                    </div>
                    <div className="personal-area__profile__description__icons">
                        <Share/>
                        <Settings/>
                        <MoreOptions/>
                    </div>
                </div>
            </div>
            <ul>
                <li><a href="#">Галерея</a></li>
                <li><a href="#">Коллекции</a></li>
                <li><a href="#">Статистика</a></li>
            </ul>
        </div>
    );
};
