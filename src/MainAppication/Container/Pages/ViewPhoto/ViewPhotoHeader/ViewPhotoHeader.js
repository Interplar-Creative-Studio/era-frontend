import React from "react";

export const ViewPhotoHeader = (props) => {
    return(
        <div className="photo-modal__header">
            <div className="photo-modal__header__user-profile"><a href="#"><img
                src="assets/img/ProfileLogo.png"/></a><a href="#">
                <p>Top Waifu</p></a></div>
            <div className="photo-modal__header__information">
                <div className="photo-modal__header__information__stats">
                    <div className="photo-modal__header__information__stats__counter">
                        <div className="photo-modal__header__information__stats__counter__views">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_796)">
                                    <path d="M16 0H0V16H16V0Z" fill="white" fill-opacity="0.01"/>
                                    <path
                                        d="M7.99967 12C11.6816 12 14.6663 8 14.6663 8C14.6663 8 11.6816 4 7.99967 4C4.31777 4 1.33301 8 1.33301 8C1.33301 8 4.31777 12 7.99967 12Z"
                                        fill="black" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                                    <path
                                        d="M7.99967 9.66659C8.92014 9.66659 9.66634 8.92039 9.66634 7.99992C9.66634 7.07945 8.92014 6.33325 7.99967 6.33325C7.07921 6.33325 6.33301 7.07945 6.33301 7.99992C6.33301 8.92039 7.07921 9.66659 7.99967 9.66659Z"
                                        fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_796">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>125</p>
                        </div>
                        <div className="photo-modal__header__information__stats__counter__likes">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_0_787)">
                                    <path d="M16 0H0V16H16V0Z" fill="white" fill-opacity="0.01"/>
                                    <path
                                        d="M4.99967 2.66675C2.97463 2.66675 1.33301 4.30838 1.33301 6.33341C1.33301 10.0001 5.66634 13.3334 7.99967 14.1088C10.333 13.3334 14.6663 10.0001 14.6663 6.33341C14.6663 4.30838 13.0247 2.66675 10.9997 2.66675C9.75957 2.66675 8.66324 3.28238 7.99967 4.22468C7.33611 3.28238 6.23977 2.66675 4.99967 2.66675Z"
                                        fill="black" stroke="black" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_787">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>125</p>
                        </div>
                    </div>
                    <div className="photo-modal__header__information__stats__date">
                        <p>Published<span>10.11.21</span></p>
                    </div>
                </div>
                <a href="#">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
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
                </a>
                <div className="photo-modal__header__information__close-button">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

                        <title/>
                        <g id="cross">
                            <line className="cls-1" x1="7" x2="25" y1="7" y2="25"/>
                            <line className="cls-1" x1="7" x2="25" y1="25" y2="7"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
};
