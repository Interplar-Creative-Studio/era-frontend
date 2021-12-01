import React from "react";

export const PhotoModalTitle = (props) => {
    return(
        <div className="photo-modal__title">
            <h1>Caption caption caption caption</h1>
            <div className="photo-modal__title__information">
                <div className="photo-modal__title__information__icons">
                    <div className="photo-modal__title__information__icons__like-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 0H0V32H32V0Z" fill="white" fill-opacity="0.01"/>
                            <path
                                d="M10.0002 5.33337C5.95013 5.33337 2.66689 8.61664 2.66689 12.6667C2.66689 20 11.3336 26.6667 16.0002 28.2175C20.6669 26.6667 29.3336 20 29.3336 12.6667C29.3336 8.61664 26.0503 5.33337 22.0002 5.33337C19.52 5.33337 17.3274 6.56464 16.0002 8.44924C14.6731 6.56464 12.4804 5.33337 10.0002 5.33337Z"
                                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="photo-modal__title__information__icons__like-icon-active">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 0H0V32H32V0Z" fill="white" fill-opacity="0.01"/>
                            <path
                                d="M10.0001 5.33325C5.94999 5.33325 2.66675 8.61652 2.66675 12.6666C2.66675 19.9999 11.3334 26.6666 16.0001 28.2174C20.6667 26.6666 29.3334 19.9999 29.3334 12.6666C29.3334 8.61652 26.0501 5.33325 22.0001 5.33325C19.5199 5.33325 17.3272 6.56452 16.0001 8.44912C14.6729 6.56452 12.4803 5.33325 10.0001 5.33325Z"
                                fill="white" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="photo-modal__title__information__icons__save-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.33311 5.33333C3.33311 4.59695 3.93007 4 4.66645 4H12.6664L15.9998 8H27.3331C28.0695 8 28.6664 8.59693 28.6664 9.33333V26.6667C28.6664 27.4031 28.0695 28 27.3331 28H4.66645C3.93007 28 3.33311 27.4031 3.33311 26.6667V5.33333Z"
                                stroke="black" stroke-width="2" stroke-linejoin="round"/>
                            <path d="M14.0002 15.3334L10.6669 18.6667L14.0002 22" stroke="black"
                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.6669 18.6666H21.3336V14.6666" stroke="black" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="photo-modal__title__information__icons__save-icon-active">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.33325 5.33333C3.33325 4.59695 3.93021 4 4.66659 4H12.6666L15.9999 8H27.3333C28.0697 8 28.6666 8.59693 28.6666 9.33333V26.6667C28.6666 27.4031 28.0697 28 27.3333 28H4.66659C3.93021 28 3.33325 27.4031 3.33325 26.6667V5.33333Z"
                                fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                            <path d="M12 19.3334L15.3333 22.0001L21.3333 14.6667" stroke="black"
                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="photo-modal__title__information__icons__settings-button">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 0H0V32H32V0Z" fill="white" fill-opacity="0.01"/>
                            <path
                                d="M23.3333 10.6667C25.1743 10.6667 26.6667 9.17427 26.6667 7.33333C26.6667 5.49239 25.1743 4 23.3333 4C21.4924 4 20 5.49239 20 7.33333C20 9.17427 21.4924 10.6667 23.3333 10.6667Z"
                                stroke="black" stroke-width="2" stroke-linejoin="round"/>
                            <path
                                d="M8.66645 19.3333C10.5074 19.3333 11.9998 17.8409 11.9998 16C11.9998 14.159 10.5074 12.6666 8.66645 12.6666C6.82551 12.6666 5.33311 14.159 5.33311 16C5.33311 17.8409 6.82551 19.3333 8.66645 19.3333Z"
                                stroke="black" stroke-width="2" stroke-linejoin="round"/>
                            <path d="M20.0004 9.04968L11.5596 14.1636" stroke="black" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.5596 17.7094L20.4532 22.9647" stroke="black" stroke-width="2"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M23.3333 21.3334C25.1743 21.3334 26.6667 22.8258 26.6667 24.6667C26.6667 26.5076 25.1743 28 23.3333 28C21.4924 28 20 26.5076 20 24.6667C20 22.8258 21.4924 21.3334 23.3333 21.3334Z"
                                stroke="black" stroke-width="2" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="photo-modal__title__information__button"><a href="#">Купить</a>
                    <p>150р</p>
                </div>
            </div>
        </div>
    );
};
