import React from "react";
import {Search} from "./Search/Search";
import {NavLink} from "react-router-dom";
import {Notification} from "./Notification/Notification";
import {Message} from "./Message/Message";
import {User} from "../../Components/User/User";
export const HeaderMainMenu = () => {
    return(
        <div className="menu__first-block">
            <NavLink to="#" className="menu__first-block__logo">
                <p>Era</p>
            </NavLink>
            <div className="menu__first-block__description">
                <p>Лента</p>
            </div>
            <Search/>
            <Notification/>
            <Message/>
            <User imgLink={"#"} img={"assets/img/ProfileLogo.png"} nameLink={"#"} name={"Top Waifu"}/>
        </div>
    );
};
