import React from "react";

export const AddPhoto = (props) => {
    return(
        <div className="add-photo-modal">
            <div className="add-photo">
                <div className="add-photo__slider">
                    <div className="add-photo__slider__input-file">
                        <input id="addPhoto" type="file" name="newsName"/>
                            <label htmlFor="files" id="drop-area-photo">
                                <p className="simple-text">Поместите изображение сюда</p>
                                <p className="drop-text">Отпустите чтобы загрузить</p>
                            </label>
                    </div>
                </div>
                <div className="add-photo__description">
                    <div className="personal-area__settings__area">
                        <div className="personal-area__settings__area__profile">
                            <h2>Настройки фото</h2>
                            <div className="personal-area__settings__area__profile__personal-information">
                                <div
                                    className="personal-area__settings__area__profile__personal-information__input-simple simple-input">
                                    <p>Название фото</p>
                                    <input type="text" placeholder="Ведите название фото"/>
                                </div>
                                <div
                                    className="personal-area__settings__area__profile__personal-information__interests">
                                    <p>Теги для поиска</p>
                                    <input id="interestsTaPhoto" type="text" placeholder="Начните вводить тег"/>
                                </div>
                                <div
                                    className="personal-area__settings__area__profile__personal-information__text-area">
                                    <p>Описание серии</p>
                                    <textarea id="taAddPhotoPhoto" placeholder="Введите описание серии"
                                              maxLength="300"></textarea>
                                    <div><span id="taNumberAddPhotoPhoto">0</span><span>/300</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="personal-area__settings__area__account">
                            <h2>Настройки серии работ</h2>
                            <div className="personal-area__settings__area__account__personal-information">
                                <div
                                    className="personal-area__settings__area__account__personal-information__input-simple simple-input">
                                    <div className="simple-input">
                                        <p>Название серии</p>
                                        <input type="email" placeholder="Ведите название серии"/>
                                    </div>
                                </div>
                                <div
                                    className="personal-area__settings__area__profile__personal-information__interests">
                                    <p>Теги для поиска</p>
                                    <input id="interestsTaPhotoEpisode" type="text" placeholder="Начните вводить тег"/>
                                </div>
                                <div className="personal-area__settings__area__profile__personal-information__text-area">
                                    <p>Описание серии</p>
                                    <textarea id="taAddPhotoEpisode" placeholder="Введите описание серии"
                                              maxLength="300"> </textarea>
                                    <div><span id="taNumberAddPhotoEpisode">0</span><span>/300</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add-photo__button">
                        <div className="personal-area__settings__menu">
                            <div className="personal-area__settings__menu__button"><a href="#">Опубликовать</a></div>
                            <ul>
                                <li><a href="#">Настройки фото</a></li>
                                <li><a href="#">Настройки серии работ</a></li>
                                <li><a href="#">Настройки монетизации</a></li>
                            </ul>
                        </div>
                        <div className="personal-area__settings__menu__button-cancel"><a href="#">Отмена</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
