import React from "react";

export const PersonalInfo = (props) => {
    return(
        <div>
            <div className="personal-area__profile">
                <div className="personal-area__profile__description"><img alt={""} src="assets/img/testImg4.png"/>
                    <div className="personal-area__profile__description__info">
                        <div className="personal-area__profile__description__info__name">
                            <h2>Top Waifu</h2><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0H0V24H24V0Z" fill="white" fill-opacity="0.01"/><path d="M11.9999 2L14.6266 3.91602L17.8778 3.90983L18.8766 7.00385L21.5105 8.90985L20.4999 12L21.5105 15.0901L18.8766 16.9961L17.8778 20.0902L14.6266 20.084L11.9999 22L9.37329 20.084L6.12209 20.0902L5.1233 16.9961L2.48938 15.0901L3.49994 12L2.48938 8.90985L5.1233 7.00385L6.12209 3.90983L9.37329 3.91602L11.9999 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.5 12L11 14.5L16 9.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
                    <div className="personal-area__profile__description__icons"><a href="#">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 0H0V30H30V0Z" fill="white" fill-opacity="0.01"/>
                            <path d="M21.875 10C23.6009 10 25 8.60087 25 6.875C25 5.14911 23.6009 3.75 21.875 3.75C20.1491 3.75 18.75 5.14911 18.75 6.875C18.75 8.60087 20.1491 10 21.875 10Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                            <path d="M8.125 18.125C9.85087 18.125 11.25 16.7259 11.25 15C11.25 13.2741 9.85087 11.875 8.125 11.875C6.39912 11.875 5 13.2741 5 15C5 16.7259 6.39912 18.125 8.125 18.125Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                            <path d="M18.7501 8.48413L10.8369 13.2784" stroke="black" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                            <path d="M10.8369 16.6025L19.1747 21.5294" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.875 20C23.6009 20 25 21.3991 25 23.125C25 24.8509 23.6009 26.25 21.875 26.25C20.1491 26.25 18.75 24.8509 18.75 23.125C18.75 21.3991 20.1491 20 21.875 20Z" stroke="black" stroke-width="2" stroke-linejoin="round"/></svg>
                    </a><a href="#"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 0H0V30H30V0Z" fill="white" fill-opacity="0.01"/>
                        <path d="M11.4274 26.982C9.33294 26.3585 7.46863 25.2008 5.99242 23.6668C6.54313 23.0141 6.875 22.1708 6.875 21.25C6.875 19.179 5.19607 17.5 3.125 17.5C2.99972 17.5 2.87587 17.5061 2.75374 17.5181C2.58737 16.7048 2.5 15.8626 2.5 15C2.5 13.6934 2.70048 12.4336 3.07237 11.2496C3.08988 11.2499 3.10743 11.25 3.125 11.25C5.19607 11.25 6.875 9.57108 6.875 7.50002C6.875 6.90545 6.73663 6.3432 6.49038 5.84376C7.93594 4.49962 9.70031 3.4937 11.6576 2.9519C12.2778 4.16756 13.5417 5.00002 15 5.00002C16.4583 5.00002 17.7223 4.16756 18.3424 2.9519C20.2997 3.4937 22.0641 4.49962 23.5096 5.84376C23.2634 6.3432 23.125 6.90545 23.125 7.50002C23.125 9.57108 24.8039 11.25 26.875 11.25C26.8926 11.25 26.9101 11.2499 26.9276 11.2496C27.2995 12.4336 27.5 13.6934 27.5 15C27.5 15.8626 27.4126 16.7048 27.2463 17.5181C27.1241 17.5061 27.0003 17.5 26.875 17.5C24.8039 17.5 23.125 19.179 23.125 21.25C23.125 22.1708 23.4569 23.0141 24.0076 23.6668C22.5314 25.2008 20.6671 26.3585 18.5726 26.982C18.0893 25.4699 16.6725 24.375 15 24.375C13.3275 24.375 11.9108 25.4699 11.4274 26.982Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                        <path d="M15 19.375C17.4162 19.375 19.375 17.4162 19.375 15C19.375 12.5837 17.4162 10.625 15 10.625C12.5837 10.625 10.625 12.5837 10.625 15C10.625 17.4162 12.5837 19.375 15 19.375Z" stroke="black" stroke-width="2" stroke-linejoin="round"/></svg></a>
                        <a href="#"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 0H0V30H30V0Z" fill="white" fill-opacity="0.01"/>
                            <path d="M7.5 16.875C8.53553 16.875 9.375 16.0355 9.375 15C9.375 13.9645 8.53553 13.125 7.5 13.125C6.46447 13.125 5.625 13.9645 5.625 15C5.625 16.0355 6.46447 16.875 7.5 16.875Z" fill="black"/><path d="M15 16.875C16.0355 16.875 16.875 16.0355 16.875 15C16.875 13.9645 16.0355 13.125 15 13.125C13.9645 13.125 13.125 13.9645 13.125 15C13.125 16.0355 13.9645 16.875 15 16.875Z" fill="black"/>
                            <path d="M22.5 16.875C23.5355 16.875 24.375 16.0355 24.375 15C24.375 13.9645 23.5355 13.125 22.5 13.125C21.4645 13.125 20.625 13.9645 20.625 15C20.625 16.0355 21.4645 16.875 22.5 16.875Z" fill="black"/></svg></a>
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
