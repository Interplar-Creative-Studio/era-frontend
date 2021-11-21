import React from "react";

export const Collections = (props) => {
    return(
        <div className="container">
            <div className="collection">
                <div className="collection__header"><h2>Коллекция 1</h2>
                    <div className="collection__header__icons"><a href="#">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 0H0V32H32V0Z" fill="white" fill-opacity="0.01"/>
                            <path
                                d="M23.3333 10.6667C25.1743 10.6667 26.6667 9.17427 26.6667 7.33333C26.6667 5.49239 25.1743 4 23.3333 4C21.4924 4 20 5.49239 20 7.33333C20 9.17427 21.4924 10.6667 23.3333 10.6667Z"
                                stroke="black" stroke-width="2" stroke-linejoin="round"/>
                            <path
                                d="M8.66659 19.3334C10.5075 19.3334 11.9999 17.841 11.9999 16.0001C11.9999 14.1591 10.5075 12.6667 8.66659 12.6667C6.82565 12.6667 5.33325 14.1591 5.33325 16.0001C5.33325 17.841 6.82565 19.3334 8.66659 19.3334Z"
                                stroke="black" stroke-width="2" stroke-linejoin="round"/>
                            <path d="M20.0001 9.04956L11.5593 14.1635" stroke="black" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.5593 17.7092L20.4529 22.9646" stroke="black" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M23.3333 21.3333C25.1743 21.3333 26.6667 22.8257 26.6667 24.6666C26.6667 26.5075 25.1743 27.9999 23.3333 27.9999C21.4924 27.9999 20 26.5075 20 24.6666C20 22.8257 21.4924 21.3333 23.3333 21.3333Z"
                                stroke="black" stroke-width="2" stroke-linejoin="round"/>
                        </svg>
                    </a><a href="#">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 0H0V32H32V0Z" fill="white" fill-opacity="0.01"/>
                            <path
                                d="M12.1893 28.7808C9.95522 28.1157 7.96661 26.8808 6.39199 25.2446C6.97941 24.5484 7.33341 23.6489 7.33341 22.6667C7.33341 20.4575 5.54255 18.6667 3.33341 18.6667C3.19978 18.6667 3.06767 18.6732 2.93741 18.686C2.75994 17.8184 2.66675 16.9201 2.66675 16C2.66675 14.6063 2.88059 13.2625 3.27727 11.9996C3.29595 11.9999 3.31467 12 3.33341 12C5.54255 12 7.33341 10.2091 7.33341 8C7.33341 7.3658 7.18581 6.76607 6.92315 6.23333C8.46508 4.79958 10.3471 3.7266 12.4348 3.14868C13.0963 4.44538 14.4445 5.33334 16.0001 5.33334C17.5556 5.33334 18.9038 4.44538 19.5653 3.14868C21.6531 3.7266 23.5351 4.79958 25.077 6.23333C24.8143 6.76607 24.6667 7.3658 24.6667 8C24.6667 10.2091 26.4576 12 28.6667 12C28.6855 12 28.7042 11.9999 28.7229 11.9996C29.1196 13.2625 29.3334 14.6063 29.3334 16C29.3334 16.9201 29.2402 17.8184 29.0628 18.686C28.9325 18.6732 28.8004 18.6667 28.6667 18.6667C26.4576 18.6667 24.6667 20.4575 24.6667 22.6667C24.6667 23.6489 25.0207 24.5484 25.6081 25.2446C24.0335 26.8808 22.0449 28.1157 19.8109 28.7808C19.2953 27.1679 17.7841 26 16.0001 26C14.2161 26 12.7049 27.1679 12.1893 28.7808Z"
                                stroke="black" stroke-width="2" stroke-linejoin="round"/>
                            <path
                                d="M15.9999 20.6666C18.5773 20.6666 20.6666 18.5773 20.6666 15.9999C20.6666 13.4226 18.5773 11.3333 15.9999 11.3333C13.4226 11.3333 11.3333 13.4226 11.3333 15.9999C11.3333 18.5773 13.4226 20.6666 15.9999 20.6666Z"
                                stroke="black" stroke-width="2" stroke-linejoin="round"/>
                        </svg>
                    </a><a href="#">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 0H0V32H32V0Z" fill="white" fill-opacity="0.01"/>
                            <path
                                d="M8 18C9.10457 18 10 17.1046 10 16C10 14.8954 9.10457 14 8 14C6.89543 14 6 14.8954 6 16C6 17.1046 6.89543 18 8 18Z"
                                fill="black"/>
                            <path
                                d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
                                fill="black"/>
                            <path
                                d="M24 18C25.1046 18 26 17.1046 26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18Z"
                                fill="black"/>
                        </svg>
                    </a></div>
                </div>
                <div className="collection__description"><img src="assets/img/testImg3.png"/>
                    <div className="collection__description__text-block"><h3>Описание</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper est at finibus
                            mattis.
                            Maecenas congue ligula ante, sed pretium tortor porta a. Proin lorem nulla, elementum in
                            varius
                            vitae, ullamcorper sed sapien. Nulla sit amet ullamcorper est. Donec tincidunt viverra
                            lacinia.
                            Etiam efficitur auctor turpis eget aliquet.</p>
                        <div className="menu__first-block__user-profile"><a href="#"><img
                            src="assets/img/ProfileLogo.png"/></a><a href="#"><p>Top Waifu</p></a></div>
                        <div className="collection__description__text-block__tags"><a href="#">Wallpapers</a><a
                            href="#">Wallpapers</a><a
                            href="#">Wallpapers</a><a href="#">Wallpapers</a><a href="#">Wallpapers</a><a
                            href="#">Wallpapers</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};
