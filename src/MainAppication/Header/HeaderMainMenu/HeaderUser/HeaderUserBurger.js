import React from "react";

export const HeaderUserBurger = (props) => {
    return(
        <div className="menu__first-block__burger">
            <div className="menu__first-block__burger__button">
                <input
                    className="menu__first-block__burger__button__cheeckbox" id="burgerActivator" type="checkbox"/>
                    <div><span></span><span></span></div>
            </div>
            <div className="menu__first-block__burger__block" id="burgerActive">
                <div className="menu__first-block__burger__block__icons">
                    <div
                        className="menu__first-block__burger__block__icons__notification menu__first-block__notification"
                        id="notification-activator-mini"><a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
                            <path d="M2 19H22M5 19V9C5 5.134 8.134 2 12 2C15.866 2 19 5.134 19 9V19H5Z"
                                  stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 22C13.3807 22 14.5 20.8807 14.5 19.5V19H9.5V19.5C9.5 20.8807 10.6193 22 12 22Z"
                                  stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className="notification-alert"><span>1</span></div>
                    </a>
                        <div className="menu__first-block__notification__modal-mini" id="notification-modal-mini"><p>
                            Количество новых подписчиков:</p>
                            <p>Количество новых оценок:</p>
                            <p>Количество новых комментариев:</p>
                            <P>Новых сообщений нет</P></div>
                    </div>
                    <div className="menu__first-block__burger__block__icons__cart menu__first-block__cart"><a href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.25 22.5C11.2165 22.5 12 21.7165 12 20.75C12 19.7835 11.2165 19 10.25 19C9.2835 19 8.5 19.7835 8.5 20.75C8.5 21.7165 9.2835 22.5 10.25 22.5Z"
                                fill="black"/>
                            <path
                                d="M18.75 22.5C19.7165 22.5 20.5 21.7165 20.5 20.75C20.5 19.7835 19.7165 19 18.75 19C17.7835 19 17 19.7835 17 20.75C17 21.7165 17.7835 22.5 18.75 22.5Z"
                                fill="black"/>
                            <path d="M2.5 3L7 6L9.5 17H19.5L22 8.5H12.5" stroke="black" stroke-width="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.5 13H16.1364H20.5" stroke="black" stroke-width="2" stroke-linecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </a></div>
                </div>
                <div className="menu__first-block__burger__block__user-profile menu__first-block__user-profile"><a
                    href="#"><img alt={""} src="assets/img/ProfileLogo.png"/></a><a
                    className="menu__first-block__burger__block__user-profile-mini" href="#"><p>Top Waifu</p></a>
                    <nav className="menu__first-block__user-profile__list-mini">
                        <ul>
                            <li><a href="#">Личный кабинет</a></li>
                            <li><a href="#">Коллекция</a></li>
                            <li><a href="#">Выход</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    );
};
