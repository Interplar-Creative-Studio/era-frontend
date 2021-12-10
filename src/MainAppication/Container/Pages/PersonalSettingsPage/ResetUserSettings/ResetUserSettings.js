import React from "react";
import {ResetUserNameInputs} from "./ResetUserNameInputs/ResetUserNameInputs";
import {NavLink} from "react-router-dom";


export const ResetUserSettings = (props) => {
    return(
        <div className="auth">
            <div className="auth__block"><h3>Era</h3>
                <div className="auth__block__form"><h2>Сменить пароль</h2>
                    <ResetUserNameInputs inputs={props.inputs}/>
                    <div className="auth__block__form__auth-button" onClick={props.onClickShowResetPassword}><NavLink to="#">Подтвердить</NavLink></div>
                    <div className="auth__block__form__reg-button" onClick={props.onClickShowResetPassword}><NavLink to="#">Отменить</NavLink></div>
                </div>
            </div>
        </div>
    );
};

