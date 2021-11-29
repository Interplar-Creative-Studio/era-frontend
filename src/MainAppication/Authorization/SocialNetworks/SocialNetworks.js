import React from "react";
import {MenuMap} from "../../Components/MenuElement/MenuMap";

export const SocialNetworks = (props) => {
    let socialNetworks = [
        {href: "#", text: "Google", onClick: props.onClickGoogle},
        {href: "#", text: "VK"},
        {href: "#", text: "Facebook", onClick: props.onClickFacebook},

    ];
    return (
        <div className="auth__block__form__sn__icons">
            <MenuMap arr={socialNetworks}/>
        </div>
    );
};
