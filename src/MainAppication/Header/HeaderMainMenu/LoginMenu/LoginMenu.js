import React from "react";
import LogIn from "../../../Authorization/LogIn/LogIn";


export const LoginMenu = (props) => {
    return (
        <div className="unregistred-modal">
            <div className="unregistred">
                <div className="unregistred__block">
                    <div className="unregistred__block__description">
                        <h2>Зарегистрируйтесь, чтобы находить больше идей</h2>
                    </div>
                    <div className="unregistred__block__form">
                        <LogIn/>
                    </div>
                </div>
            </div>
        </div>
    );
};
