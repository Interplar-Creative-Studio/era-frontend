import React from "react";
import {Search} from "./Search/Search";
import {NavLink} from "react-router-dom";
import {Notification} from "../../Components/Icons/Notification";
import {Message} from "../../Components/Icons/Message";
import {User} from "../../Components/User/User";
import {PERSONAL, PERSONAL_GALLERY, PICTURE_PAGE} from "../../../UrlsConst";
import {Card} from "../../Components/Icons/Card";
import {NotificationModal} from "./NotificationModal/NotificationModal";


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
            <Notification amount={"1"}/>
            <NotificationModal/>
            <Card/>
            <User imgLink={`${PERSONAL}?name=${PERSONAL_GALLERY}`} img={"assets/img/ProfileLogo.png"} nameLink={PERSONAL} name={"Top Waifu"}/>
        </div>
    );
};
