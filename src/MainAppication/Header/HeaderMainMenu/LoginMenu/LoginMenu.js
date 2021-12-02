import React from "react";


export const LoginMenu = (props) => {
    return (
        <div className="unregistred-modal">
            <div className="unregistred">
                <div className="unregistred__block">
                    <div className="unregistred__block__description">
                        <h2>Зарегистрируйтесь, чтобы находить больше идей</h2>
                    </div>
                    <div className="unregistred__block__form">
                        <div className="reg">
                            <div className="reg__block">
                                <div className="reg__block__form">
                                    <h2>Создание аккаунта</h2>
                                    <div className="auth__block__form__input">
                                        <p>Логин</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="auth__block__form__input">
                                        <p>Логин</p>
                                        <input type="text"/>
                                    </div>
                                    <div className="auth__block__form__input">
                                        <p>Пароль</p>
                                        <input type="password"/>
                                    </div>
                                    <div className="auth__block__form__auth-button"><a href="#">Создать аккаунт</a>
                                    </div>
                                    <div className="auth__block__form__sn">
                                        <p>Или зарегистрируйтесь с помощью</p>
                                        <div className="auth__block__form__sn__icons"><a href="#">Google</a><a
                                            href="#">VK</a><a
                                            href="#">Facebook</a></div>
                                    </div>
                                    <div className="auth__block__form__reg-button"><a href="#">Войти в существующий
                                        аккаунт</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
