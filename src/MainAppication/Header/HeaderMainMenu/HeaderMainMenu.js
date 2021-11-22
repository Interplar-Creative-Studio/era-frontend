import React from "react";
import {Search} from "./Search/Search";
import {NavLink} from "react-router-dom";
import {Notification} from "./Notification/Notification";
import {Message} from "./Message/Message";
import {User} from "../../Components/User/User";
import {PERSONAL, PICTURE_PAGE} from "../../../UrlsConst";
export const HeaderMainMenu = () => {
    return(
        <div className="menu__first-block">
            <NavLink to={PICTURE_PAGE} className="menu__first-block__logo">
                <p>Era</p>
            </NavLink>
            <div className="menu__first-block__description">
                <p>Лента</p>
            </div>
            <Search/>
            <Notification/>
            <Message/>
            <User imgLink={PERSONAL} img={"assets/img/ProfileLogo.png"} nameLink={PERSONAL} name={"Top Waifu"}/>
        </div>
    );
};
